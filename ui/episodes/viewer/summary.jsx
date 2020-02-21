import React from 'react'

export default function EpisodeViewerSummary ({ episode }) {
  if (!episode || !episode.summary || episode.summary.length < 0) {
    return <div />
  }

  return (
    <div className='summary'>
      <div className='first-letter'>{episode.summary.slice(0,1)}</div>
      {episode.summary.slice(1)}
    </div>
  )
}
