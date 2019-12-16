import React, { useState } from 'react' 
import Auth0Row from '../auth/AuthenticationRow'
import SidePanel from './side-panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'

export default function Header ({ authService, onAuthStateChange }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const hamburgerClass = `hamburger${isSidebarOpen ? ' rotated': ''}`

  function hamburgerClick () {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <header>
      <SidePanel isOpen={isSidebarOpen} />
      <div className={hamburgerClass} onClick={hamburgerClick}>
        <FontAwesomeIcon icon="bars" />
      </div>
      <div className='title'>Erukar 2.0</div>
      <Auth0Row onAuthStateChange={onAuthStateChange} service={authService} />
    </header>
  )
}
