import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel, { DefaultContents, sidePanelClass } from '../index';
import { filterLegends, filterAuthenticationRequired } from '../contents-builder'

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

    describe('filterAuthenticationRequired', () => {
      const contents = [{
        name: 'Home',
      }, {
        name: 'Account Management',
        requiresAuthentication: true
      }]

      it('Does not show Account Management if not logged in', () => {
        let result = filterAuthenticationRequired({ contents })
        expect(result).toHaveLength(1)
      })
    })

    describe('filterLegends', () => {
      it('Shows Legends of Erukar if disabled in profile', () => {
        let profile = {
          config: {
            hasDisabledLegends: false
          }
        }
        let result = filterLegends({ contents: DefaultContents, profile })
        expect(result).toHaveLength(6)
      })

      it('Does not show Legends of Erukar if disabled in profile', () => {
        let profile = {
          config: {
            hasDisabledLegends: true
          }
        }
        let result = filterLegends({ contents: DefaultContents, profile })
        expect(result).toHaveLength(5)
      })

      it('Does not show Legends of Erukar if not logged in', () => {
        let result = filterLegends({ contents: DefaultContents })
        expect(result).toHaveLength(5)
      })
    })
  })
})


