import React from 'react'
import CampaignOverview from './overview'
import UpcomingEpisode from './upcoming-episode'

export default function CampaignPreview ({ campaign, episode, invert=false }) {
  function overview () {
    return <CampaignOverview campaign={campaign} />
  }

  function artwork () {
    return (
      <div className='art-episode-container'>
        <div className='artwork' style={{backgroundImage: `url(${campaign.artwork[0]})`}} />
        <UpcomingEpisode campaign={campaign} episode={episode} />
      </div>
    )
  }

  return (
    <div className='campaign-preview'>
      <div className='top-panel'>
        {invert ? overview() : artwork() }
        {invert ? artwork() : overview() }
      </div>
    </div>
  )
}
