import React from 'react'

export default function CampaignAtAGlanceUpcomingEpisode ({ campaign, episode }) {
  let date = new Date(campaign.upcomingEpisode.date).toDateString()
  let dateAndEnrolled = `${date}, ${episode.characters.length} players enrolled`

  return (
    <div className='next-episode'>
      <div className='content'>
        <div className='title'>{campaign.upcomingEpisode.title}</div>
        <div className='date'>{dateAndEnrolled} </div>
        <div className='description'>{campaign.upcomingEpisode.description}</div>
        <div className='controls'>
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  )
}
