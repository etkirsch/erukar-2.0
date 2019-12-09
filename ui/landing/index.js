import React from 'react';
import LandingContentRow from './content-row'
import UpcomingEpisode from './upcoming-episode'
import './landing.scss' 

export default function LandingPage () {
  return (
    <div className='landing-page'>
      <div className='artwork' />
      <UpcomingEpisode />
      <LandingContentRow />
    </div>
  )
}
