import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../index.js'

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div)
    ReactDOM.unmountComponentAtNode(div);
  })
})
