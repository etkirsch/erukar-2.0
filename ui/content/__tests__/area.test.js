import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import ContentArea from '../area';

const testContent = [{
  title: 'Legends of Erukar',
  description: 'A Multiplayer Roguelike set within the world of Eikalis after the end of the Second Scourge of Vrakaros',
  friendly_id: 'content%20selection%201'
}]

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><ContentArea content={testContent} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
