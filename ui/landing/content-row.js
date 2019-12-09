import React from 'react'
import ContentItem from './content-item'

export default function LandingContentRow () {
  let content = [{
    title: 'Legends of Erukar',
    description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum'
  }, {
    title: 'Content Selection #1',
    description: 'Lorem ipsum dolor sit amet'
  }, {
    title: 'Content Selection #2',
    description: 'Lorem ipsum dolor sit amet'
  }]

  return (
    <div className='content-row'>
      {content.map(x => <ContentItem content={x} className='element' />)}
    </div>
  )
}
