import React, { Component } from 'react';

import ChateauBuble from './ChateauBuble';

class Demo extends Component {

  constructor () {
    super();
    this.state = {
      messages: [
        { author: 'Janis', text: '🏰' },
        { author: 'Peter', text: '🗯' }
      ]
    }
  }

  onAddMessage (msg) {
    this.setState((prevState, props) =>
      ([...(prevState.messages), msg]));
  }

  render () {
    return <div style={{
        margin: '0 auto',
        width: 480
      }}>
      <ChateauBuble messages={this.state.messages}
                         onAddMessage={this.onAddMessage} />
      </div>
  }
}

export default Demo;
