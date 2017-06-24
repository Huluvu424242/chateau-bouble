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
    return <ChateauBuble messages={this.state.messages}
                         onAddMessage={this.onAddMessage} />
  }
}

export default Demo;
