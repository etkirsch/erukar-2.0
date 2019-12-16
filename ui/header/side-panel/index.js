import React from 'react'
import SidePanelRow from './row'
import './side-panel.scss'
import { filterAuthenticationRequired } from './contents-builder'

export const DefaultContents = [
  { 
    name: 'Home'
  }, {
    name: 'Campaign Planner'
  }, {
    name: 'Legends of Erukar',
    requiresAuthentication: true,
    requiresLegendsActivation: true
  }, {
    name: 'Divine Fonts'
  }, {
    name: 'Eikalan Lore'
  }, {
    name: 'Account Management',
    requiresAuthentication: true
  }
]

export function sidePanelClass (isOpen) {
  return (isOpen)
    ? 'side-panel is-open'
    : 'side-panel'
}

export default function SidePanel ({ isOpen, profile, contents=DefaultContents }) {
  let profileContents = filterAuthenticationRequired({ contents, profile })

  return (
    <div className={sidePanelClass(isOpen)}>
      {profileContents.map((content, i) => {
        const key = `side-panel-row-element-${i}`
        return <SidePanelRow key={key} content={content} />
      })}
    </div>
  )
}
