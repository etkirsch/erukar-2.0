import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import ContentItem from '../item';

const testContent = {
  title: 'Legends of Erukar',
  description: 'A Multiplayer Roguelike set within the world of Eikalis after the end of the Second Scourge of Vrakaros',
  friendly_id: 'content%20selection%20#1'
}

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><ContentItem content={testContent} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
