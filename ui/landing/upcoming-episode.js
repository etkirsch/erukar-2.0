import React from 'react'
import './upcoming-episode.scss'

export default function UpcomingEpisode ({ episode }) {
  function title () {
    return `${episode.campaign.title}: ${episode.title}`
  }

  function atAGlance () {
    let date = new Date(episode.date).toDateString()

    return `${date} / ${episode.characters.length} players enrolled`
  }

  return (
    <div className='upcoming-episode'>
      <div className='logo' />
      <div className='remainder'>
        <div className='title-bar'>{title()}</div>
        <div className='at-a-glance'>{atAGlance()}</div>
        <div className='controls'>
          <div>Dismiss</div>
          <div>Read More</div>
          <div>Join</div>
        </div>
      </div>
    </div>
  )
}
