import React, { useState } from 'react' 
import Auth0Row from '../auth/AuthenticationRow'
import SidePanel from './side-panel'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'

const profile = {
  name: 'Frank',
  config: {
    hasDisabledLegends: true
  }
}

export default function Header ({ authService, campaigns, onAuthStateChange }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const hamburgerClass = `hamburger${isSidebarOpen ? ' rotated': ''}`

  let profileWithCampaigns = {
    ...profile,
    campaigns: campaigns.map((campaign) => ({
      id: campaign.id,
      name: campaign.title
    }))
  }

  function hamburgerClick () {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <header>
      <SidePanel closeSidePanel={() => setSidebarOpen(false)} profile={profileWithCampaigns} isOpen={isSidebarOpen} />
      <div className={hamburgerClass} onClick={hamburgerClick}>
        <FontAwesomeIcon icon="bars" />
      </div>
      <div className='title'><Link to="/">Erukar 2.0</Link></div>
      <Auth0Row onAuthStateChange={onAuthStateChange} service={authService} />
    </header>
  )
}
