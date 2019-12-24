import React from 'react'

export default function CampaignViewerSummary ({ campaign }) {
  if (!campaign.summary || campaign.summary.length < 0) {
    return <div />
  }

  return (
    <div className='summary'>
      <div className='first-letter'>{campaign.summary.slice(0,1)}</div>
      {campaign.summary.slice(1)}
    </div>
  )
}
