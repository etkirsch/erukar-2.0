import React from 'react'
import { Link } from 'react-router-dom'

function createContentRoute (content) {
  return [{
    text: 'Learn More',
    route: `/content/${content.friendly_id}`
  }]
}

export default function LandingContentItem ({ content }) {
  let controls = (content.controls)
    ? content.controls
    : createContentRoute(content)

  return (
    <div className='content-item'>
      <div className='title'>{content.title}</div>
      <div className='description'>{content.description}</div>
      <div className='controls'>
        {controls.map((control, i) => {
          const key = `content-control-${i}-${control.route}`
          return <Link key={key} to={control.route}>{control.text}</Link>
        })}
      </div>
    </div>
  )
}
