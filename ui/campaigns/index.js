import React from 'react'
import ContentArea from '../content/area'
import CampaignAtAGlance from './campaign-at-a-glance'
import './campaign-explorer.scss'

export default function CampaignExplorer () {
  let content = [{
    title: 'Create a Campaign',
    description: 'Lorem ipsum dolor sit amet'
  }, {
    title: 'Join a Campaign',
    description: 'Lorem ipsum dolor sit amet'
  }]

   const campaigns = [{
    name: 'The History of Edraston',
    description: 'In the fourth century of the Thaedoth Theocratic Imperium, settlers struggle to survive onthe outskirts of imperial rule. Tensions run high as Kholtea and Valorisia each set their sights on the Edras region.',
    upcomingEpisode: {
      title: 'Prickard\'s Quarrel',
      description: 'The Prickard Mine falls into chaos admist strikes and sabotage'
    }
  }, {
    name: 'The Second Scourge',
    description: 'An ancient evil has reappeared after nearly two millennia. The future of society hangs on the actions of our heroes.',
    upcomingEpisode: {
      title: 'The Fall of Heck',
      description: 'This is not actually a real episode.'
    }
   }]

  return (
    <div className='campaign-explorer'>
      <ContentArea content={content} />
      <div className='campaigns'>
        {campaigns.map(campaign => <CampaignAtAGlance campaign={campaign} />)}
      </div>
    </div>
  )
}
