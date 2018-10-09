// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick(){
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return(
      <button onClick={this.handleClick.bind(this)}><label>{this.state.timesClicked}</label></button>
    )
  }

}

export default DigitalClicker;
