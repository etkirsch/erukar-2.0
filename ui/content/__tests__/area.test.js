import React from 'react';
import ReactDOM from 'react-dom';
import ContentArea from '../area';

const testContent = [{
  title: 'Legends of Erukar',
  description: 'A Multiplayer Roguelike set within the world of Eikalis after the end of the Second Scourge of Vrakaros',
  friendly_id: 'content%20selection%2#1'
}]

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContentArea content={testContent} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
