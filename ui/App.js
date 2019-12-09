import React, { useState } from 'react';
import ApiService from './ApiService'
import AuthenticationService from './AuthService'
import Header from './header'
import Landing from './landing'
import './App.scss';

const apiService = new ApiService() 
const authService = new AuthenticationService(apiService) 
authService.restoreExistingState()

function App() {
  let [isAuthenticated, setAuthenticated] = useState(authService.hasValidState())

  function onAuthStateChange (authState) {
    if (isAuthenticated) {
      console.log('removing authentication')
    }
    setAuthenticated(!!authState)
  }

  return (
    <div className="App">
      <Header authService={authService} onAuthStateChange={onAuthStateChange} />
      <div className='main'>
        <Landing />
      </div>
    </div>
  );
}

export default App;
