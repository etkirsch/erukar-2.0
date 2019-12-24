import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import UpcomingEpisode from '../upcoming-episode'

const testCampaign = {
  name: 'Consultants and Dragons',
  description: 'The first campaign within the world of Eikalis',
  artwork: [
    '/static/images/shamradaer-example.png'
  ]
}

const upcomingEpisode = {
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

describe ('basic tests', () => {
  it('renders upcoming episode without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><UpcomingEpisode episode={upcomingEpisode} campaign={testCampaign} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders no episode without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><UpcomingEpisode campaign={testCampaign} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
