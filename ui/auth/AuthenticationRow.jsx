import React, { useState } from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import './auth-row.scss'

export default function Auth0Row ({ service, onAuthStateChange }) {
  let [isAuthenticated, setAuthenticated] = useState(service.hasValidState())

  function handleAuthChange (authState, authProfile) {
    onAuthStateChange(authState)
    setAuthenticated(!!authState)
  }

  function renderButton () {
    return (isAuthenticated)
      ? <LogoutButton service={service} handleAuthChange={handleAuthChange} />
      : <LoginButton service={service} handleAuthChange={handleAuthChange} />
  }

  return (
    <div className='auth-row'>{renderButton()}</div>
  )
}
