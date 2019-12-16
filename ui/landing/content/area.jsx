import React from 'react'
import ContentRow from './row'
import { segmentSuggestions } from './segmenter'

export default function LandingContentArea ({ suggestions }) {
  return (
    <div className='content-area'>
      {segmentSuggestions(suggestions).map((segment, i) => {
        return <ContentRow
          key={`landing-content-row-${i}`}
          suggestions={segment}
          className='content-row' />
      })}
    </div>
  )
}
