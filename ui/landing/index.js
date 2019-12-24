import React from 'react';
import ContentArea from '../content/area'
import UpcomingEpisode from './upcoming-episode'
import './landing.scss' 

export default function LandingPage ({ campaign, upcomingEpisode }) {
  const contentSuggestions = [{
    title: 'Legends of Erukar',
    description: 'A Multiplayer Roguelike set within the world of Eikalis after the end of the Second Scourge of Vrakaros',
    friendly_id: 'content%20selection%20#1',
    controls: [{
        text: 'Dismiss',
        route: '/legends/dismiss'
      }, {
        text: 'Learn More',
        route: '/help/legends'
      }
    ]
  }, {
    title: 'Content Selection #1',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%20#1'
  }, {
    title: 'Content Selection #2',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%20#1'
  }, {
    title: 'Content Selection #3',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%20#1'
  }, {
    title: 'The Will of Acethyrith',
    description: 'The legendary sword bestowed upon Arokan Falendar and wielded by Erevan Nightbreeze.',
    friendly_id: 'content%20selection%20#1'
  }]

  return (
    <div className='landing-page'>
      <div className='artwork' style={{backgroundImage: 'url(/static/images/ashta-example.jpg)'}}>
        <UpcomingEpisode episode={upcomingEpisode} campaign={campaign} />
      </div>
      <ContentArea content={contentSuggestions} />
    </div>
  )
}
