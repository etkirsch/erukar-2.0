import React from 'react'
import SidePanelRow from './row'
import './side-panel.scss'
import { buildSidePanelContents } from './contents-builder'

const DefaultContentSegments = [
  [{ 
    name: 'Home',
    route: '/'
  }], [{
    name: 'Campaigns',
    route: '/campaigns'
  }, {
    name: 'Legends of Erukar',
    requiresAuthentication: true,
    requiresLegendsActivation: true,
    route: '/'
  }, {
    name: 'Eikalis Lore',
    route: '/'
  }, {
    name: 'Account Management',
    requiresAuthentication: true,
    route: '/'
  }]
]

export function sidePanelClass (isOpen) {
  return (isOpen)
    ? 'side-panel is-open'
    : 'side-panel'
}

export default function SidePanel ({ isOpen, profile, closeSidePanel, contentSegments=DefaultContentSegments }) {
  let profileContents = buildSidePanelContents({ contentSegments, profile })

  return (
    <div className={sidePanelClass(isOpen)}>
      <div className='header'>Erukar 2.0</div>
      {profileContents.map((content, i) => {
        const key = `side-panel-row-element-${i}`
        return <SidePanelRow key={key} content={content} onClick={closeSidePanel} />
      })}
    </div>
  )
}
