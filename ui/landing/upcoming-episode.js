import React from 'react'
import { Link } from 'react-router-dom'
import './upcoming-episode.scss'

export default function UpcomingEpisode ({ campaign, episode }) {
  function title () {
    return (!!campaign)
      ? `${campaign.title}: ${episode.title}`
      : episode.title
  }

  function atAGlance () {
    let date = new Date(episode.date).toDateString()

    return `${date}, ${episode.characters.length} players enrolled`
  }

  if (!episode) {
    return <div />
  }

  return (
    <div className='upcoming-episode'>
      <div className='logo' />
      <div className='remainder'>
        <div className='title-bar'>{title()}</div>
        <div className='at-a-glance'>{atAGlance()}</div>
        <div className='controls'>
          {campaign && <Link to={`/campaigns/${campaign.id}`}>See Campaign</Link>}
          <Link to='/'>Read More</Link>
          <Link to='/'>Join</Link>
        </div>
      </div>
    </div>
  )
}
