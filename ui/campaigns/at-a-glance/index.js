import React from 'react'
import CampaignOverview from './overview'
import UpcomingEpisode from './upcoming-episode'

export default function CampaignAtAGlance ({ campaign }) {
  return (
    <div className='campaign-at-a-glance'>
      <CampaignOverview campaign={campaign} />
      <div className='right'>
        <UpcomingEpisode campaign={campaign} episode={campaign.upcomingEpisode} />
        <div className='all-episodes'>
          View All Episodes
        </div>
      </div>
    </div>
  )
}
