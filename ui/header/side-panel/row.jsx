import React from 'react'
import { Link } from 'react-router-dom'

export default function SidePanelRow ({ content }) {
  return (
    <div className='row'>
      <Link to={content.route}>{content.name}</Link>
    </div>
  )
}
