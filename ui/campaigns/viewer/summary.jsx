import React from 'react'

export default function CampaignViewerSummary ({ campaign }) {
  return (
    <div className='summary'>
      <div className='first-letter'>{campaign.summary.slice(0,1)}</div>
      {campaign.summary.slice(1)}
    </div>
  )
}
