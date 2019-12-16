import React from 'react'

export default function LandingContentItem ({ content }) {
  return (
    <div className='content-item'>
      <div className='title'>{content.title}</div>
      <div className='description'>{content.description}</div>
      <div className='controls'>
        {content.isDismissible && <a href='dismiss'>Dismiss</a>}
        <a href={content.friendly_id}>Learn More</a>
      </div>
    </div>
  )
}
