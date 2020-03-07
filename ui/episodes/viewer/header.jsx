import React from 'react'

export default function EpisodeViewerHeader ({ episode }) {
  return (
    <div className='header'>
      <div className='title'>{episode.title}</div>
      <div className='description'>{episode.description}</div>
      <div className='gm'>Game Mastered by {episode.gm}</div>
    </div>
  )
}
