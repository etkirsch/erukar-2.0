import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CampaignOverview ({ campaign }) {
  let episodes = (campaign.hasCompleted)
    ? <a href="/"><FontAwesomeIcon icon="lock" />View Episodes</a>
    : <a href="/">View Episodes</a>

  let summaryDescription = (campaign.hasCompleted)
    ? 'The Full Story'
    : 'The Story So Far'

  return (
    <div className='overview'>
      <div className='title'>{campaign.title}</div>
      <div className='description'>{campaign.description}</div>
      <div className='controls'>
        <a href="/">{summaryDescription}</a>
        {episodes}
        <a href="/">Dramatis Personae</a>
      </div>
    </div>
  )
}
