import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CampaignPreview from '../'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faLock)

const completedCampaign = {
  name: 'Consultants and Dragons',
  description: 'The first campaign within the world of Eikalis',
  hasCompleted: true,
  artwork: [
    '/static/images/shamradaer-example.png'
  ]
}

const uncompletedCampaign = {
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
}

describe ('basic tests', () => {
  it('renders normal variant (no episode, hasCompleted) without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><CampaignPreview campaign={completedCampaign} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders inverted variant (no episode, hasCompleted)  without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><CampaignPreview campaign={completedCampaign} invert={true} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders normal variant (no episode, hasCompleted) without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><CampaignPreview campaign={uncompletedCampaign} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders inverted variant (no episode, hasCompleted)  without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><CampaignPreview campaign={uncompletedCampaign} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
