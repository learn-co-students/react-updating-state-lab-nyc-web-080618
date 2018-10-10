// Code DigitalClicker Component Here
import React, { Component, Fragment } from 'react';

class DigitalClicker extends Component {

  constructor(props){
    super(props);
    this.state = {
      timesClicked: 0,
    }
  }

  handlerClick = () => {
    const update = this.state.timesClicked + 1
    this.setState({
      timesClicked: update
    })
  }

  render() {
    return (
      <button onClick={this.handlerClick}>{this.state.timesClicked}</button>
    );
  }

}

export default DigitalClicker;
