import React from 'react';
import LandingContentArea from './content-area'
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

  const contentSuggestions = [{
    title: 'Legends of Erukar',
    description: 'A Multiplayer Roguelike set within the world of Eikalis after the end of the Second Scourge of Vrakaros',
    friendly_id: 'content%20selection%2#1',
    isDismissible: true
  }, {
    title: 'Content Selection #1',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%2#1'
  }, {
    title: 'Content Selection #2',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%2#1'
  }, {
    title: 'Content Selection #3',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%2#1'
  }, {
    title: 'The Will of Acethyrith',
    description: 'The legendary sword bestowed upon Arokan Falendar and wielded by Erevan Nightbreeze.',
    friendly_id: 'content%20selection%2#1'
  }]

  return (
    <div className='landing-page'>
      <div className='artwork' style={{backgroundImage: 'url(/static/images/ashta-example.jpg)'}}>
        <UpcomingEpisode episode={episode} />
      </div>
      <LandingContentArea suggestions={contentSuggestions} />
    </div>
  )
}
