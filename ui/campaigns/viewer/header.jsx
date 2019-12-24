import React from 'react'

export default function CampaignViewerHeader ({ campaign }) {
  return (
    <div className='header'>
      <div className='title'>{campaign.title}</div>
      <div className='description'>{campaign.description}</div>
      <div className='gm'>Game Mastered by {campaign.gm}</div>
      <div className='top-controls'>
        <div className='control'>Dramatis Personae</div>
        <div className='control'>Episodes</div>
      </div>
    </div>
  )
}
