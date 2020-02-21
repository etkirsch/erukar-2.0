import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import EpisodeViewer from '../index'

export const testEpisode = {
  id: 'prickards-quarrel',
  title: 'Prickard\'s Quarrel',
  date: '2019-12-04T22:36:08.821Z',
  gm: 'Evan Kirsch',
  description: 'The Prickard Mine falls into chaos admist strikes and sabotage',
  artwork: [
    '/static/images/parvion-example.png'
  ],
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
  it('renders with a campaign without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router initialEntries={["/episodes/prickards-quarrel"]}>
        <EpisodeViewer apiService={null} cache={[testEpisode]} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
