import React from 'react'


export default function EpisodeCharacterViewer ({ character, playerInfo }) {
  return (
    <div className='character-viewer'>
      <div className='icon' style={{ 'backgroundImage': `url(${character.icon})` }}/>
      <div className='primary'>
        <div className='inner'>
          <div className='name'>{character.name}</div>
          {character.player &&
            <div className='player'>Played by {character.player}</div>
          }
          <div className='profession'>
            Level {character.level} {character.profession}
          </div>
        </div>
      </div>
      <div className='controls'>
      </div>
    </div>
  )
}
