// Code YouTubeDebugger Component Here
import React from "react"

class YouTubeDebugger extends React.Component {
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
  handleClick = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolution = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }

    })
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick} className="bitrate">bitrate button</button>
      <button onClick={this.handleResolution} className="resolution">resolution button</button>
      </div>
    )
  }

} //end of class
export default YouTubeDebugger
