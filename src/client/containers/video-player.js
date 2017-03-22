import React, { Component } from 'react';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { player: null };
  }
  render() {
    const { videoID } = this.props;
    if (videoID == '') {
      return <div></div>;
    }
    return (
      <Youtube
        videoId={ videoID }
        onReady={ this.onReady }
      />
    );
  }

  onReady(e) {
    this.setState({ player: e.target });
  }
}

const mapStateToProps = state => ({ videoID: state.selectedVideoID });

export default connect(mapStateToProps)(VideoPlayer);
