import React from 'react'

export default function SidePanelRow ({ content }) {
  return (
    <div className='row'>
      <a href="/">{content.name}</a>
    </div>
  )
}
