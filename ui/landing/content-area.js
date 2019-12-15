import React from 'react'
import ContentRow from './content-row'

export default function LandingContentArea ({ suggestions }) {
  const length = Math.ceil(suggestions.length / 3)
  const segmentedSuggestions = Array.from({ length }, (v, k) => 
    suggestions.slice(k*3, (k+1)*3)
  )
  console.log(segmentedSuggestions)

  return (
    <div className='content-area'>
      {segmentedSuggestions.map((segment, i) => {
        return <ContentRow
          key={`landing-content-row-${i}`}
          suggestions={segment}
          className='content-row' />
      })}
    </div>
  )
}
