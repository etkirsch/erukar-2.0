import React from 'react'

export default function CampaignOverview ({ campaign }) {
  return (
    <div className='overview'>
      <div className='title'>{campaign.name}</div>
      <div className='description'>{campaign.description}</div>
      <div className='controls'>
        <a href="/">Read More</a>
      </div>
    </div>
  )
}
