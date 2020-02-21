import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Summary from '../summary'
import { testEpisode } from './episode-viewer.test'

describe ('basic tests', () => {
  it('renders with a summary without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <Summary episode={testEpisode} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without a summary without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <Summary episode={{}} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
