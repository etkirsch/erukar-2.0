import React from 'react'

export default function LandingContentItem ({ content }) {
  return (
    <div className='content-item'>
      <div className='title'>{content.title}</div>
      <div className='description'>{content.description}</div>
      <div className='controls'>
        <div>Learn More</div>
      </div>
    </div>
  )
}
