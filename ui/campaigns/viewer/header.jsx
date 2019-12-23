import React from 'react'

export default function CampaignViewerHeader ({ campaign }) {
  console.dir(campaign)
  return (
    <div className='header'>
      <div className='title'>{campaign.title}</div>
      <div className='description'>{campaign.description}</div>
      <div className='gm'>Game Mastered by {campaign.gm}</div>
    </div>
  )
}
