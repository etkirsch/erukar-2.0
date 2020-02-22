import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import CampaignViewer from '../index'
import { testCacheFull as cache } from '../../../__tests__/test-cache-full'

describe ('basic tests', () => {
  it('renders with a campaign without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Router initialEntries={["/campaigns/the-history-of-edraston"]}>
        <CampaignViewer apiService={null} cache={cache} />
      </Router>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
