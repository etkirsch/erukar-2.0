import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import UpcomingEpisode from '../upcoming-episode'
import { testCacheFull as cache } from '../../../__tests__/test-cache-full'

describe ('basic tests', () => {
  it('renders with an episode without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <UpcomingEpisode episode={cache.episodes[0]} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without an episode without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <UpcomingEpisode episode={null} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
