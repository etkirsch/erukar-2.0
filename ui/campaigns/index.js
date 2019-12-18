import React from 'react'
import ContentArea from '../content/area'
import CampaignAtAGlance from './at-a-glance'
import './campaign-explorer.scss'

export default function CampaignExplorer () {
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
      text: 'Create',
      route: '/campaigns/explore'
    }]
  }]

   const campaigns = [{
    name: 'The History of Edraston',
    description: 'In the fourth century of the Thaedoth Theocratic Imperium, settlers struggle to survive on the outskirts of imperial rule. Tensions run high as Kholtea and Valorisia each set their sights on the Edras region.',
    upcomingEpisode: {
      title: 'Prickard\'s Quarrel',
      date: '2019-12-04T22:36:08.821Z',
      description: 'The Prickard Mine falls into chaos admist strikes and sabotage',
      level: 4,
      characters: [{
        id: -1,
        name: 'Tycho',
        level: 4,
        player: { name: 'Frank', id: -1 }
      }, {
        id: -1,
        name: 'Larry',
        level: 6,
        player: { name: 'Larry', id: -1 }
      }]
    }
  }, {
    name: 'The Second Scourge',
    description: 'An ancient evil has reappeared after nearly two millennia. The future of society hangs on the actions of our heroes.',
    upcomingEpisode: {
      title: 'The Fall of Heck',
      date: '2019-12-09T22:36:08.821Z',
      description: 'This is not actually a real episode.',
      level: 4,
      characters: [{
        id: -1,
        name: 'Tycho',
        level: 4,
        player: { name: 'Frank', id: -1 }
      }, {
        id: -1,
        name: 'Larry',
        level: 6,
        player: { name: 'Larry', id: -1 }
      }, {
        id: -1,
        name: 'Red',
        level: 6,
        player: { name: 'Will', id: -1 }
      }]
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
