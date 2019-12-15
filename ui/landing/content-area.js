import React from 'react'
import ContentRow from './content-row'

export default function LandingContentArea ({ suggestions }) {
  function segmentSuggestions () {
    const length = Math.ceil(suggestions.length / 3)
    const segmentedSuggestions = Array.from({ length }, (_, k) => 
      suggestions.slice(k*3, (k+1)*3)
    )
    return segmentedSuggestions
  }

  return (
    <div className='content-area'>
      {segmentSuggestions().map((segment, i) => {
        return <ContentRow
          key={`landing-content-row-${i}`}
          suggestions={segment}
          className='content-row' />
      })}
    </div>
  )
}
