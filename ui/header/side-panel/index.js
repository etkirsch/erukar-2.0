import React from 'react'
import SidePanelRow from './row'
import './side-panel.scss'

export function sidePanelClass (isOpen) {
  return (isOpen)
    ? 'side-panel is-open'
    : 'side-panel'
}

const DefaultContents = [
  'Home',
  'Legends of Erukar',
  'Campaign Planner',
  'The Divine Fonts',
  'Eikalan Lore',
  'Account Management'
]

export default function SidePanel ({ isOpen, contents=DefaultContents }) {
  return (
    <div className={sidePanelClass(isOpen)}>
      {contents.map((content, i) => {
        const key = `side-panel-row-element-${i}`
        return <SidePanelRow key={key} content={content} />
      })}
    </div>
  )
}
