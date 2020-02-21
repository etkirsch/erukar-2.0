import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../header'
import { testEpisode } from './episode-viewer.test'

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router>
        <Header episode={testEpisode} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
