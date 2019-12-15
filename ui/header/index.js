import React, { useState } from 'react' 
import Auth0Row from '../auth/AuthenticationRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'

export default function Header ({ authService, onAuthStateChange }) {
  const [isRotated, setIsRotated] = useState(false)

  const hamburgerClass = `hamburger${isRotated ? ' rotated': ''}`

  return (
    <header>
      <div className={hamburgerClass} onClick={() => setIsRotated(!isRotated)}>
        <FontAwesomeIcon icon="bars" />
      </div>
      <div className='title'>Erukar 2.0</div>
      <Auth0Row onAuthStateChange={onAuthStateChange} service={authService} />
    </header>
  )
}
