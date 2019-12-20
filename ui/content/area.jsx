import React from 'react'
import ContentRow from './row'
import { segmentSuggestions } from './segmenter'
import './content-area.scss'

export default function LandingContentArea ({ content }) {
  if (!content || content.length === 0) {
    return <div />
  }

  return (
    <div className='content-area'>
      {segmentSuggestions(content).map((segment, i) => {
        return <ContentRow
          key={`landing-content-row-${i}`}
          content={segment}
          className='content-row' />
      })}
    </div>
  )
}
