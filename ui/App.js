import React, { useState } from 'react';
import ApiService from './ApiService'
import AuthenticationService from './AuthService'
import Header from './header'
import Landing from './landing'
import CampaignExplorer from './campaigns/explorer'
import CampaignViewer from './campaigns/viewer'
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
    id: 'the-history-of-edraston',
    title: 'The History of Edraston',
    gm: 'Evan Kirsch',
    description: 'A sandbox campaign set in the fourth century of the Thaedoth Theocratic Imperium',
    summary: '381, Thaedoth Era. Settlers flock to the Mt. Edras region following the discovery of a black crystal called "Salericite". The demand for Salericite skyrocketed overnight, causing an influx of fortune-seekers and career criminals. A settlement has started between the Edras and Prickard Mines. ',
    artwork: [
      '/static/images/ashta-example.jpg'
    ],
    upcomingEpisode: {
      title: 'Prickard\'s Quarrel',
      date: '2019-12-04T22:36:08.821Z',
      gm: 'Evan Kirsch',
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
    id: 'the-second-scourge',
    title: 'The Second Scourge',
    gm: 'Evan Kirsch',
    description: 'An ancient evil has reappeared after nearly two millennia. The future of society hangs on the actions of our heroes.',
    summary: 'In 542 CA, Alacron Draume, the High Justice of the Kingdom of Iuria, established a small task force to investigate an entity deep beneath the Moq Sulhan mines. This entity was discovered to be the Prime Defiler Karravaska who almost nearly destroyed the world with the First Vrakk Scourge. The High Justice\'s brother Rathod set Karravaska free, and the task force stepped up to stop the Second Scourge.',
    hasCompleted: true,
    artwork: [
      '/static/images/ygdiras-example.jpg'
    ]
  }, {
    id: 'consultants-and-dragons',
    title: 'Consultants and Dragons',
    gm: 'Evan Kirsch',
    description: 'The first campaign within the world of Eikalis',
    summary: 'The adventuring guild known as \'Consultants and Dragons\' was formed in Barlen, Iuria, by the retired Archmage Vorenus Magnus. Hijinks ensued, as the Consultants staged (failed) heists and expeditions into the no-man\'s-land, Erukar. This campaign concluded when the King of Iuria Riphel II was assassinated in Luinden on Kingsday, sparking the resistance war called the Iurian Reclamation.',
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
        <Route path="/campaigns/:id">
          <CampaignViewer cache={testCampaigns} apiService={apiService} />
        </Route>
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
        <Header authService={authService} onAuthStateChange={onAuthStateChange} campaigns={testCampaigns} />
        <div className='main'>
          {renderRoutes()}
        </div>
      </div>
    </Router>
  );
}

export default App;
