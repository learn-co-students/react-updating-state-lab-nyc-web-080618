// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor(props){
    super(props)
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

  clickBitrate(){
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  clickResolution(){
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <React.Fragment>
      <button className="bitrate" onClick={this.clickBitrate.bind(this)}>Bitrate</button>
      <button className="resolution" onClick={this.clickResolution.bind(this)}>Resolution</button>
      </React.Fragment>
    )
  }

}

export default YouTubeDebugger;
