import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ViewerHeader from './header'
import ViewerSummary from './summary'
import CharacterList from './character-list'
import NotFound from '../../errors/404'
import './episode-viewer.scss'

export default function EpisodeViewer ({ apiService, cache }) {
  let [episode, setEpisode] = useState()
  const { episodeId } = useParams() 

  useEffect(() => {
    let found = cache.episodes[episodeId]
    setEpisode(found)
  }, [cache, episodeId])

  useEffect(() => {
    if (!apiService) {
      return
    }

    apiService
      .call({ endpoint: `/episodes/${episodeId}` })
      .then(res => setEpisode(res))
  }, [apiService, episodeId])

  if (!episode) {
    return <NotFound id={episodeId} type='episode' />
  }

  return (
    <div className='episode-viewer'>
      <ViewerHeader episode={episode} />
      <div className='artwork' style={{backgroundImage: `url(${episode.artwork[0]})`}} />
      <ViewerSummary episode={episode} />
      <CharacterList episode={episode} cache={cache} />
    </div>
  )
}
