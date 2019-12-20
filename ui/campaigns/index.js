import React from 'react'
import ContentArea from '../content/area'
import CampaignAtAGlance from './preview'
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
      text: 'Join',
      route: '/campaigns/explore'
    }]
  }]

   const campaigns = [{
    name: 'The History of Edraston',
    description: 'In the fourth century of the Thaedoth Theocratic Imperium, settlers struggle to survive on the outskirts of imperial rule. Tensions run high as Kholtea and Valorisia each set their sights on the Edras region.',
    artwork: [
      '/static/images/ashta-example.jpg'
    ],
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
    hasCompleted: true,
    artwork: [
      '/static/images/ygdiras-example.jpg'
    ]
  }, {
    name: 'Consultants and Dragons',
    description: 'The first campaign within the world of Eikalis',
    hasCompleted: true,
    artwork: [
      '/static/images/shamradaer-example.png'
    ]
  }]

  return (
    <div className='campaign-explorer'>
      <div className='campaigns'>
        {campaigns.map((campaign, i) => <CampaignAtAGlance campaign={campaign} invert={i%2}/>)}
      </div>
      <ContentArea content={content} />
    </div>
  )
}
