import React from 'react';
import LandingContentRow from './content-row'
import UpcomingEpisode from './upcoming-episode'
import './landing.scss' 

export default function LandingPage () {
  const episode = {
    campaign: {
      title: 'The Second Scourge',
      id: -1
    },
    id: -1,
    title: 'The Fall of Heck',
    date: '2019-12-09T22:36:08.821Z',
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
    }, {
      id: -1,
      name: 'Red',
      level: 6,
      player: { name: 'Will', id: -1 }
    }]
  }

  return (
    <div className='landing-page'>
      <div className='artwork' />
      <UpcomingEpisode episode={episode} />
      <LandingContentRow />
    </div>
  )
}
