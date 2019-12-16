import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel, { sidePanelClass } from '../index';

describe ('basic tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidePanel isOpen={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders opened without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidePanel isOpen={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe('inner functionality', () => {
  it('does not render is-open when closed', () => {
    let result = sidePanelClass(false)
    expect(result).toEqual('side-panel')
  })

  it('renders is-open when open', () => {
    let result = sidePanelClass(true)
    expect(result).toEqual('side-panel is-open')
  })
})
