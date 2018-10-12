// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here

import React from 'react';

class YouTubeDebugger extends React.Component{

  state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }

  bitRateButton = () => {
    this.setState({
      settings: {
        ...this.state.settings, bitrate: 12,
      },
    });
    debugger
  }

  updateResolution = () => {
    this.setState({
            settings: {
              ...this.state.settings,
              video: {
                ...this.state.settings.video,
                resolution: '720p'
              }
            }
          });
          debugger
  }

  render(){
    return(
      <div>
      <button onClick={this.bitRateButton}>current bitrate is {this.state.settings.bitrate}</button>
      <button onClick={this.updateResolution}>Resolution is {this.state.settings.video.resolution}</button>
    </div>
    )
  }
}

export default YouTubeDebugger;
