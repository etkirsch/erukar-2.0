import React from 'react'
import { Link } from 'react-router-dom'
import './upcoming-episode.scss'

export default function UpcomingEpisode ({ campaign, episode }) {
  function title () {
    return `${campaign.title}: ${episode.title}`
  }

  function atAGlance () {
    let date = new Date(episode.date).toDateString()

    return `${date}, ${episode.characters.length} players enrolled`
  }

  return (
    <div className='upcoming-episode'>
      <div className='logo' />
      <div className='remainder'>
        <div className='title-bar'>{title()}</div>
        <div className='at-a-glance'>{atAGlance()}</div>
        <div className='controls'>
          <Link to={`/campaigns/${campaign.id}`}>See Campaign</Link>
          <Link to='/'>Read More</Link>
          <Link to='/'>Join</Link>
        </div>
      </div>
    </div>
  )
}
