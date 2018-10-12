// Code DigitalClicker Component Here

import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {timesClicked: 0}
  }

  buttonClickerFunction = () => {
    let numberOfClicks = this.state.timesClicked + 1
    this.setState({timesClicked:numberOfClicks})
  }


  render(){
    return(<button onClick={this.buttonClickerFunction}>This button has been clicked {this.state.timesClicked} times</button>)
  }
}

export default DigitalClicker;
