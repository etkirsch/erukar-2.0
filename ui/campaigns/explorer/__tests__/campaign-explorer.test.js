import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CampaignExplorer from '../'

const testCampaigns = [{
  name: 'Consultants and Dragons',
  description: 'The first campaign within the world of Eikalis',
  hasCompleted: true,
  artwork: [
    '/static/images/shamradaer-example.png'
  ]
}]

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><CampaignExplorer campaigns={testCampaigns} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
