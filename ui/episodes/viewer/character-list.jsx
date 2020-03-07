import React from 'react'
import CharacterViewer from './character-viewer'
import './character-list.scss'

export default function EpisodeCharacterList ({ episode, cache, playerInfo }) {
  return (
    <div className='character-list'>
      <div className='list-title'>Participants</div>
      {episode.characters.map((_id) => {
        let character = cache.characters[_id]
        return <CharacterViewer character={character} playerInfo={playerInfo} />
      })}
    </div>
  )
}
