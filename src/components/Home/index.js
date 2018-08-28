import React, { Component } from 'react';
import { Menu, Button, Divider, Feed } from 'semantic-ui-react'

import D3 from './d3.js';

class Index extends Component {
  render() {
    return (
      // Menu with Bulma-React.
      <div style={{marginLeft: '375px'}}>
        <h2 style={{marginLeft: '30px', marginTop: '20px'}}>Welcome Alex,</h2>
        <h5 style={{marginLeft: '30px', marginTop: '10px'}}>You have 32 notifications.</h5>
        <D3></D3>
        <Feed style={{marginLeft: '40px', marginTop: '30px'}}>
          <Feed.Event
            icon='pencil'
            date='Today'
            summary="You spended 50$ today."
            />
          <Feed.Event
            icon='pencil'
            date='Today'
            summary="You earned 350$ today."
            />
          <Feed.Event>
            <Feed.Label icon='pencil' />
            <Feed.Content date='Today' summary="Alain wants you to supply him with energy." />
          </Feed.Event>
        </Feed>
      </div>
    );
  }
}

export default Index;