import React from 'react'

export default function EpisodeViewerHeader ({ episode }) {
  function formattedDate () {
    let episodeDate = new Date(episode.date)
    let datestring = episodeDate.toDateString()
      .split(' ')
      .slice(1)
      .join(' ')

    if (episodeDate.getTime() < Date.now()) {
      return `Took place on ${datestring}.`
    }
    let timestring = episodeDate.toLocaleTimeString()
      .split(' ')
      .slice(0,2)
      .join(' ')

    return `Will take place on ${datestring} at ${timestring}.`
  }

  return (
    <div className='header'>
      <div className='title'>{episode.title}</div>
      <div className='description'>{episode.description}</div>
      <div className='date'>{formattedDate()}</div>
      <div className='gm'>Game Mastered by {episode.gm}</div>
    </div>
  )
}
