import React from 'react'

export default function CampaignAtAGlance ({ campaign }) {
  let date = new Date(campaign.upcomingEpisode.date).toDateString()

  return (
    <div className='campaign-at-a-glance'>
      <div className='left'>
        <div className='title'>{campaign.name}</div>
        <div className='description'>{campaign.description}</div>
        <div className='controls'>
          <a href="/">Read More</a>
        </div>
      </div>
      <div className='right'>
        <div className='next-episode'>
          <div className='content'>
            <div className='title'>{campaign.upcomingEpisode.title}</div>
            <div className='date'>{date}</div>
            <div className='description'>{campaign.upcomingEpisode.description}</div>
            <div className='controls'>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
        <div className='all-episodes'>
          View All Episodes
        </div>
      </div>
    </div>
  )
}
