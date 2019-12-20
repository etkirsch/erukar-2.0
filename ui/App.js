import React, { useState } from 'react';
import ApiService from './ApiService'
import AuthenticationService from './AuthService'
import Header from './header'
import Landing from './landing'
import CampaignExplorer from './campaigns'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.scss';

const apiService = new ApiService() 
const authService = new AuthenticationService(apiService) 
authService.restoreExistingState()

const testCampaigns = [{
    name: 'The History of Edraston',
    description: 'In the fourth century of the Thaedoth Theocratic Imperium, settlers struggle to survive on the outskirts of imperial rule. Tensions run high as Kholtea and Valorisia each set their sights on the Edras region.',
    artwork: [
      '/static/images/ashta-example.jpg'
    ],
    upcomingEpisode: {
      title: 'Prickard\'s Quarrel',
      date: '2019-12-04T22:36:08.821Z',
      description: 'The Prickard Mine falls into chaos admist strikes and sabotage',
      level: 4,
      characters: [{
        id: -1,
        name: 'Tycho',
        level: 4,
        player: { name: 'Frank', id: -1 }
      }, {
        id: -1,
        name: 'Larry',
        level: 6,
        player: { name: 'Larry', id: -1 }
      }]
    }
  }, {
    name: 'The Second Scourge',
    description: 'An ancient evil has reappeared after nearly two millennia. The future of society hangs on the actions of our heroes.',
    hasCompleted: true,
    artwork: [
      '/static/images/ygdiras-example.jpg'
    ]
  }, {
    name: 'Consultants and Dragons',
    description: 'The first campaign within the world of Eikalis',
    hasCompleted: true,
    artwork: [
      '/static/images/shamradaer-example.png'
    ]
  }]

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
        <Route path="/campaigns">
          <CampaignExplorer campaigns={testCampaigns} />
        </Route>
        <Route path="/">
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
