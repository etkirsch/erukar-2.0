import React, { useState, useEffect } from 'react';
import ApiService from './ApiService'
import AuthenticationService from './AuthService'
import Header from './header'
import Landing from './landing'
import CampaignExplorer from './campaigns/explorer'
import CampaignViewer from './campaigns/viewer'
import EpisodeViewer from './episodes/viewer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.scss';

const apiService = new ApiService() 
const authService = new AuthenticationService(apiService) 
authService.restoreExistingState()

const defaultCache = {
  campaigns: [],
  episodes: [],
  upcomingEpisodes: [],
  topics: []
}

function App() {
  let [isAuthenticated, setAuthenticated] = useState(authService.hasValidState())
  const [cache, setCache] = useState(defaultCache)

  useEffect(() => {
    apiService.call({ endpoint: '/pull-cache' })
    .then(res => setCache(res))
  }, [])

  function onAuthStateChange (authState) {
    if (isAuthenticated) {
      console.log('removing authentication')
    }
    setAuthenticated(!!authState)
  }

  function renderRoutes () {
    return (
      <Switch>
        <Route path="/campaigns/:id">
          <CampaignViewer cache={cache} />
        </Route>
        <Route path="/campaigns">
          <CampaignExplorer cache={cache} />
        </Route>
        <Route path="/episodes/:episodeId">
          <EpisodeViewer cache={cache} />
        </Route>
        <Route path="/">
          <Landing cache={cache} />
        </Route>
      </Switch>
    )
  }

  return (
    <Router>
      <div className="App">
        <Header authService={authService} onAuthStateChange={onAuthStateChange} campaigns={cache.campaigns} />
        <div className='main'>
          {renderRoutes()}
        </div>
      </div>
    </Router>
  );
}

export default App;
