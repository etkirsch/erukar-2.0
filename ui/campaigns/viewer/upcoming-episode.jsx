import React from 'react'
import './upcoming-episode.scss'

export default function UpcomingEpisode ({ episode }) {
  function preview () {
    let date = new Date(episode.date).toDateString()

    return `${date}, ${episode.characters.length} players enrolled`
  }

  if (!episode) {
    return <div />
  }

  return (
    <div className='upcoming-episode'>
      <div className='title'>Next Episode: {episode.title}</div>
      <div className='preview'>{preview()}</div>
      <div className='description'>{episode.description}</div>
      <div className='controls'>
        <div>Read More</div>
        <div>Join</div>
      </div>
    </div>
  )
}
