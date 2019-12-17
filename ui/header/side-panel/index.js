import React from 'react'
import SidePanelRow from './row'
import './side-panel.scss'
import { buildSidePanelContents } from './contents-builder'

const DefaultContentSegments = [
  [{ 
    name: 'Home'
  }], [{
    name: 'Campaigns'
  }, {
    name: 'Legends of Erukar',
    requiresAuthentication: true,
    requiresLegendsActivation: true
  }, {
    name: 'Eikalis Lore'
  }, {
    name: 'Account Management',
    requiresAuthentication: true
  }]
]

export function sidePanelClass (isOpen) {
  return (isOpen)
    ? 'side-panel is-open'
    : 'side-panel'
}

export default function SidePanel ({ isOpen, profile, contentSegments=DefaultContentSegments }) {
  let profileContents = buildSidePanelContents({ contentSegments , profile })

  return (
    <div className={sidePanelClass(isOpen)}>
      {profileContents.map((content, i) => {
        const key = `side-panel-row-element-${i}`
        return <SidePanelRow key={key} content={content} />
      })}
    </div>
  )
}
