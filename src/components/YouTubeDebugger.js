import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
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
  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.changeRate}
        >
          Change bitrate
        </button>
        <button
          className="resolution"
          onClick={this.changeRes}
        >
          Change resolution
        </button>
      </div>
    );
  }
  changeRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  // changes bitrate to 12
  changeRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }
  // changes resolution to 720p

}
