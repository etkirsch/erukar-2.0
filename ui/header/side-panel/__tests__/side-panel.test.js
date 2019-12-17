import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel, { DefaultContents, sidePanelClass } from '../index';
import * as methods from '../contents-builder'

const defaultProfile = {
  config: {
    hasDisabledLegends: true
  }
}

describe ('Side Panel', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SidePanel profile={defaultProfile} isOpen={false} />, div);
      ReactDOM.unmountComponentAtNode(div);
    })

    it('renders opened without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SidePanel profile={defaultProfile} isOpen={true} />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  })

  describe('unit tests', () => {
    const profile = { name: 'Frank' }
    const legendsDisabledProfile = { name: 'Frank', config: { hasDisabledLegends: true }}
    const legendsEnabledProfile = { name: 'Frank', config: { hasDisabledLegends: false }}
    const profileWithCampaigns = {
      name: 'Frank',
      campaigns : [{
        name: 'Campaign One',
        id: 'campaign-1'
      }, {
        name: 'Campaign Two',
        id: 'campaign-2'
      }]
    }
    const profileWithCampaignsSansLegends = {
      ...legendsDisabledProfile,
      ...profileWithCampaigns
    }
    const authElement = { name: 'asdf', requiresAuthentication: true }
    const legendsElement = { name: 'asdf', requiresLegendsActivation: true }
    const legendsAuthElement = { name: 'asdf', requiresLegendsActivation: true, requiresAuthentication: true }
    const regularElement = { name: 'asdf' }
    const contentSegments = [
      [{ 
        name: 'Home'
      }], [{
        name: 'Campaigns'
      }, {
        name: 'Legends of Erukar',
        requiresAuthentication: true,
        requiresLegendsActivation: true
      }, {
        name: 'Eikalis Lore'
      }, {
        name: 'Account Management',
        requiresAuthentication: true
      }]
    ]

    describe('sidePanelClass', () => {
      it('does not render is-open when closed', () => {
        let result = sidePanelClass(false)
        expect(result).toEqual('side-panel')
      })

      it('renders is-open when open', () => {
        let result = sidePanelClass(true)
        expect(result).toEqual('side-panel is-open')
      })
    })

    describe('methods.filterAuthenticationRequired', () => {
      it('does not filter if profile does not exist', () => {
        let result = methods.filterAuthenticationRequired(regularElement, undefined)
        expect(result).toBeTruthy()
      })

      it('filters if profile does not exist', () => {
        let result = methods.filterAuthenticationRequired(authElement, undefined)
        expect(result).toBeFalsy()
      })

      it('does not filter regular element if profile does exist', () => {
        let result = methods.filterAuthenticationRequired(regularElement, profile)
        expect(result).toBeTruthy()
      })

      it('does not filter auth-required element if profile does exist', () => {
        let result = methods.filterAuthenticationRequired(authElement, profile)
        expect(result).toBeTruthy()
      })
    })

    describe('methods.filterLegends', () => {
      it('does not filter if profile does not exist and legends is not required', () => {
        let result = methods.filterLegends(regularElement, undefined)
        expect(result).toBeTruthy()
      })

      it('does not filter if profile exists but legends is not required', () => {
        let result = methods.filterLegends(regularElement, profile)
        expect(result).toBeTruthy()
      })

      it('does not filter if profile exists, legends is disabled, but not required', () => {
        let result = methods.filterLegends(regularElement, legendsDisabledProfile)
        expect(result).toBeTruthy()
      })

      it('does filter if profile exists, legends is disabled and required', () => {
        let result = methods.filterLegends(legendsElement, legendsDisabledProfile)
        expect(result).toBeFalsy()
      })

      it('does filter if profile does not exist and legends is required', () => {
        let result = methods.filterLegends(legendsElement, undefined)
        expect(result).toBeFalsy()
      })

      it('does not filter if profile exists, legends is enabled and required', () => {
        let result = methods.filterLegends(legendsElement, legendsEnabledProfile)
        expect(result).toBeTruthy()
      })
    })

    describe('methods.filterContents', () => {
      it('with no profile, filters authentication required and legends elements', () => {
        let result = methods.filterContents({
          contents: [regularElement, authElement, legendsElement],
          profile: undefined
        })
        expect(result).toHaveLength(1)
      })
      it('with a profile, does not filter authentication required and legends elements', () => {
        let result = methods.filterContents({
          contents: [regularElement, authElement, legendsElement],
          profile: profile
        })
        expect(result).toHaveLength(3)
      })

      it('with a profile that has legends disabled, filters only legends elements', () => {
        let result = methods.filterContents({
          contents: [regularElement, authElement, legendsElement],
          profile: legendsDisabledProfile
        })
        expect(result).toHaveLength(2)
      })
    })

    describe('profileCampaigns', () => {
      it('returns an empty array if profile does not exist', () => {
        let result = methods.profileCampaigns(undefined)
        expect(result).toHaveLength(0)
      })

      it('returns an empty array if profile does not have campaigns', () => {
        let result = methods.profileCampaigns(profile)
        expect(result).toHaveLength(0)
      })

      it('returns an array with campaigns if profile has campaigns', () => {
        let result = methods.profileCampaigns(profileWithCampaigns)
        expect(result).toHaveLength(profileWithCampaigns.campaigns.length)
      })
    })

    describe('createContents', () => {
      it('does not add campaigns with unknown account', () => {
        let result = methods.createContents({ contentSegments })
        expect(result).toHaveLength(5)
      })

      it('does not add campaigns for account with no campaigns', () => {
        let result = methods.createContents({ contentSegments, profile })
        expect(result).toHaveLength(5)
      })

      it('adds campaigns after Home for account with campaigns', () => {
        let result = methods.createContents({ contentSegments, profile: profileWithCampaigns })
        expect(result).toHaveLength(5 + profileWithCampaigns.campaigns.length)
        expect(result[1].name).toEqual(profileWithCampaigns.campaigns[0].name)
        expect(result[2].name).toEqual(profileWithCampaigns.campaigns[1].name)
        expect(result[3].name).toEqual('Campaigns')
      })
    })

    describe('buildSidePanelContents', () => {
      it('filters auth-required and legends if profile does not exist', () => {
        let result = methods.buildSidePanelContents({ contentSegments })
        expect(result).toHaveLength(3)
      })

      it('filters legends if profile exists but deactivated legends', () => {
        let result = methods.buildSidePanelContents({ contentSegments, profile: legendsDisabledProfile })
        expect(result).toHaveLength(4)
      })

      it('filters nothing if profile exists and has activated legends', () => {
        let result = methods.buildSidePanelContents({ contentSegments, profile: legendsEnabledProfile })
        expect(result).toHaveLength(5)
      })

      it('adds campaigns if profile has campaigns', () => {
        let result = methods.buildSidePanelContents({ contentSegments, profile: profileWithCampaigns })
        expect(result).toHaveLength(7)
        expect(result[1].name).toEqual(profileWithCampaigns.campaigns[0].name)
        expect(result[2].name).toEqual(profileWithCampaigns.campaigns[1].name)
      })

      it('adds campaigns but filters legends if profile has campaigns and deactivated legends', () => {

        let result = methods.buildSidePanelContents({ contentSegments, profile: profileWithCampaignsSansLegends })
        expect(result).toHaveLength(6)
        expect(result[1].name).toEqual(profileWithCampaigns.campaigns[0].name)
        expect(result[2].name).toEqual(profileWithCampaigns.campaigns[1].name)
      })
    })
  })
})
