// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  state = { errors: [],
    user: null,
    settings: { bitrate: 8,
                video: { resolution: '1080p' }
              }
          }

  bitrateClick = () => {
    this.setState({
      settings: {...this.state.settings, bitrate:12}
    })
  }

  resolutionClick = () => {
    // debugger
    this.setState({
      settings: {...this.state.settings, video:{resolution:"720p"}}
    }
  )

  }


  render(){
    return(
      <React.Fragment>
      <button onClick = {this.bitrateClick}className = 'bitrate'>
      change bitrate
      </button>

      <button onClick = {this.resolutionClick}className = 'resolution'>
      change resolution
      </button>
      </React.Fragment>
    )

  }


}
