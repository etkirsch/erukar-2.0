import React from 'react';
import ContentArea from '../content/area'
import UpcomingEpisode from './upcoming-episode'
import './landing.scss' 

export default function LandingPage ({ cache }) {
  let upcomingEpisodeId = cache.upcomingEpisodes[0]
  let campaign = cache.campaigns.find(x => x.upcomingEpisode === upcomingEpisodeId)
  let episode = cache.episodes.find(x => x.id === upcomingEpisodeId)

  return (
    <div className='landing-page'>
      <div className='artwork' style={{backgroundImage: 'url(/static/images/ashta-example.jpg)'}}>
        <UpcomingEpisode episode={episode} campaign={campaign} />
      </div>
      <ContentArea content={cache.topics} />
    </div>
  )
}
