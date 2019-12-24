import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from '../index.js'

const testCampaign = {
  id: 'the-history-of-edraston',
  title: 'The History of Edraston',
  gm: 'Evan Kirsch',
  description: 'A sandbox campaign set in the fourth century of the Thaedoth Theocratic Imperium',
  summary: '381, Thaedoth Era. Settlers flock to the Mt. Edras region following the discovery of a black crystal called "Salericite". The demand for Salericite skyrocketed overnight, causing an influx of fortune-seekers and career criminals. A settlement has started between the Edras and Prickard Mines. ',
  artwork: [
    '/static/images/ashta-example.jpg'
  ],
  upcomingEpisode: {
    title: 'Prickard\'s Quarrel',
    date: '2019-12-04T22:36:08.821Z',
    gm: 'Evan Kirsch',
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
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <Landing campaign={testCampaign} upcomingEpisode={testCampaign.upcomingEpisode} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
