import React, { useState } from 'react';
import ApiService from './ApiService'
import AuthenticationService from './AuthService'
import Header from './header'
import Landing from './landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
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

  function renderRoutes () {
    return (
      <Switch>
        <Route jath="/">
          <Landing />
        </Route>
      </Switch>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header authService={authService} onAuthStateChange={onAuthStateChange} />
        <div className='main'>
          {renderRoutes()}
        </div>
      </div>
    </Router>
  );
}

export default App;
