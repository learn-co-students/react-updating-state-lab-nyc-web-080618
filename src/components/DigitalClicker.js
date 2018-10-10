// Code DigitalClicker Component Here
import React from "react"

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleEvent = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleEvent}>{this.state.timesClicked}</button>

    )}

} //end of class
export default DigitalClicker
