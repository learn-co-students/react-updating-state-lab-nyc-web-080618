import React, {Component} from 'react'

class YouTubeDebugger extends Component {

  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitClick = (event) => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate:12,
      }
    },() => console.log(this.state.settings))

  }

  handleRezClick = (event) => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
        ...this.state.settings.video,
        resolution:'720p'
        }
      }
    }, () => console.log(this.state.settings.video))

  }

  render() {
    return (
      <div>
        <button onClick={this.handleBitClick} className='bitrate'>BIT</button>
        <button className='resolution' onClick={this.handleRezClick}>REZ</button>
        </div>
    )
  }
}


export default YouTubeDebugger
