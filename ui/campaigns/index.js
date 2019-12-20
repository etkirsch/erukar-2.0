import React from 'react'
import ContentArea from '../content/area'
import CampaignPreview from './preview'
import './campaign-explorer.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faLock)

export default function CampaignExplorer ({ campaigns }) {
  let content = [{
    title: 'Create a Campaign',
    description: 'Create a campaign for the D&D 5e, Pathfinder 2e, Shadows of the Demon Lord, or Legends of Erukar system.',
    controls: [{
      text: 'Learn More',
      route: '/help/create-campaign'
    }, {
      text: 'Create',
      route: '/campaigns/create'
    }]
  }, {
    title: 'Join a Campaign',
    description: 'Browse active campaigns for any supported system, then join with a new character or one you already own.',
    controls: [{
      text: 'Learn More',
      route: '/help/join-campaign'
    }, {
      text: 'Join',
      route: '/campaigns/explore'
    }]
  }]

  return (
    <div className='campaign-explorer'>
      <div className='campaigns'>
        {campaigns.map((campaign, i) => {
          let key = `campaign-explorer-preview-${i}`
          return <CampaignPreview key={key} campaign={campaign} invert={i%2} />
        })}
      </div>
      <ContentArea content={content} />
    </div>
  )
}
