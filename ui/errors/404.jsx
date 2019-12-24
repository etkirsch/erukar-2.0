import React from 'react'

export default function NotFound ({ id, type='campaign' }) {
  return (
    <div className='error-page'>
      Error: A {type} with id {id} was not found on the remote server.
    </div>
  )
}
