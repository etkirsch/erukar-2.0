import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Landing from '../index.js'
import { testCacheFull as cache } from '../../__tests__/test-cache-full'

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <Landing cache={cache} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
