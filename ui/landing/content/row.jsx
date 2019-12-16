import React from 'react'
import ContentItem from './item'

export default function LandingContentRow ({ suggestions }) {
  return (
    <div className='content-row'>
      {suggestions.map((content, i) => {
        return <ContentItem
          key={`landing-content-row-item-${i}`}
          content={content}
          className='element' />
      })}
    </div>
  )
}
