import React from 'react'
import './upcoming-episode.scss'

export default function UpcomingEpisode ({ episode }) {
  let campaignName = episode.campaign.title
  let episodeName = episode.title
  let date = new Date(episode.date)
  let episodeLevel = episode.level
  let characters = episode.characters

  return (
    <div className='upcoming-episode'>
      <div className='logo' />
      <div className='remainder'>
        <div className='title-bar'>{campaignName}: {episodeName}</div>
        <div className='at-a-glance'>{date.toDateString()} / Level {episodeLevel} / {characters.length} players enrolled</div>
        <div className='controls'>
          <div>Dismiss</div>
          <div>Read More</div>
          <div>Join</div>
        </div>
      </div>
    </div>
  )
}
