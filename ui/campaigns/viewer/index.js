import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UpcomingEpisode from './upcoming-episode'
import ViewerHeader from './header'
import ViewerSummary from './summary'
import NotFound from '../../errors/404'
import './campaign-viewer.scss'

export default function CampaignViewer ({ apiService, cache=[] }) {
  let [campaign, setCampaign] = useState()
  const { id } = useParams() 

  useEffect(() => {
    let found = cache.find((cachedCopy) => cachedCopy.id === id)
    setCampaign(found)
  }, [cache, id])

  useEffect(() => {
    if (!apiService) {
      return
    }

    apiService
      .call({ endpoint: `/campaigns/${id}` })
      .then(res => setCampaign(res))
  }, [apiService, id])

  if (!campaign) {
    return <NotFound id={id} type='campaign' />
  }

  return (
    <div className='campaign-viewer'>
      <ViewerHeader campaign={campaign} />
      {campaign.upcomingEpisode && <UpcomingEpisode episode={campaign.upcomingEpisode} campaign={campaign} />}
      <div className='artwork' style={{backgroundImage: `url(${campaign.artwork[0]})`}} />
      <ViewerSummary campaign={campaign} />
    </div>
  )
}
