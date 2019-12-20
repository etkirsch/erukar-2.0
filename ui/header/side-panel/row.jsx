import React from 'react'
import { Link } from 'react-router-dom'

export default function SidePanelRow ({ content, onClick }) {
  return (
    <div className='row'>
      <Link onClick={onClick} to={content.route}>{content.name}</Link>
    </div>
  )
}
