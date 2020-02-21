import React from 'react'
import { Link } from 'react-router-dom'

export default function CampaignAtAGlanceUpcomingEpisode ({ campaign, episode }) {
  if (!episode) {
    return <div />
  }

  let date = (episode.date)
    ? new Date(episode.date).toDateString()
    : 'Date TBA'

  let summary = `${date}, ${episode.characters.length} players enrolled`

  return (
    <div className='next-episode'>
      <Link to={`/episodes/${episode.id}`}>
        <div className='content'>
          <div className='title'>Next Episode: {episode.title}</div>
          <div className='date'>{summary} </div>
          <div className='description'>{episode.description}</div>
        </div>
      </Link>
    </div>
  )
}
