import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Summary from '../summary'
import { testCacheFull as cache } from '../../../__tests__/test-cache-full'

describe ('basic tests', () => {
  it('renders with a summary without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <Summary campaign={cache.campaigns[0]} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without a summary without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <Summary campaign={{}} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
