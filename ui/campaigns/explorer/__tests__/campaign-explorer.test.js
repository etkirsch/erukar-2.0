import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import CampaignExplorer from '../'
import { testCacheFull as cache } from '../../../__tests__/test-cache-full'


describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><CampaignExplorer cache={cache} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
