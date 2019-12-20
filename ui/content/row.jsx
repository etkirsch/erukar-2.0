import React from 'react'
import ContentItem from './item'

export default function LandingContentRow ({ content }) {
  return (
    <div className='content-row'>
      {content.map((c, i) => {
        return <ContentItem
          key={`landing-content-row-item-${i}`}
          content={c}
          className='element' />
      })}
    </div>
  )
}
