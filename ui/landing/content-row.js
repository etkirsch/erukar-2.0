import React from 'react'
import ContentItem from './content-item'

export default function LandingContentRow ({ suggestions }) {
  return (
    <div className='content-row'>
      {suggestions.map(content => <ContentItem content={content} className='element' />)}
    </div>
  )
}
