// Code YouTubeDebugger Component Here
import React, { Component, Fragment } from 'react';

class YouTubeDebugger extends Component {

  constructor(props){
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  handlerClick = () => {
    this.setState({
      settings: {...this.state.settings,
        bitrate: 12,
      }
    })
  }

  change = () => {
    this.setState({
      settings: {...this.state.settings,
        video: {...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <Fragment>
      <button className = "bitrate" onClick={this.handlerClick}></button>
      <button className = "resolution" onClick={this.change}></button>
      </Fragment>
    );
  }

}

export default YouTubeDebugger;
