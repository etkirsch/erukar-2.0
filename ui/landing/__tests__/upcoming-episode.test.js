import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import UpcomingEpisode from '../upcoming-episode.js'
import { testCacheFull as cache } from '../../__tests__/test-cache-full'

describe ('basic tests', () => {
  it('renders (with episode and campaign) without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <UpcomingEpisode campaign={cache.campaigns[0]} episode={cache.episodes[0]} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders (with episode, no campaign)  without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <UpcomingEpisode episode={cache.episodes[0]} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders (with no episode)  without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <UpcomingEpisode />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
