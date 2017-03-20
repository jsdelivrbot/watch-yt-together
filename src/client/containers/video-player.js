import React, { Component } from 'react';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';

class VideoPlayer extends Component {
  render() {
    const { videoID } = this.props;
    if (videoID == '') {
      return <div></div>;
    }
    return <Youtube videoId={ videoID }/>;
  }
}

const mapStateToProps = state => ({ videoID: state.selectedVideoID });

export default connect(mapStateToProps)(VideoPlayer);
