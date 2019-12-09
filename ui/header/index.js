import React from 'react' 
import Auth0Row from '../auth/AuthenticationRow'
import './header.scss'

export default function Header ({ authService, onAuthStateChange }) {
  return (
    <header>
      <div className='hamburger'>|||</div>
      <div className='title'>Erukar 2.0</div>
      <Auth0Row onAuthStateChange={onAuthStateChange} service={authService} />
    </header>
  )
}
