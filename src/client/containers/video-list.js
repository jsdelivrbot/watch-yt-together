import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pickVideo } from '../actions/video-actions';
import VideoListItem from '../components/video-list-item';

class VideoList extends Component {
  render() {
    return (
      <ul>
        { this.renderVideoList.call(this) }
      </ul>
    );
  }

  renderVideoList() {
    return this.props.videos.map(v => {
      const { videoId } = v.id;
      const { pickVideo } = this.props;
      return <VideoListItem key={ videoId } video={ v } onClick={ pickVideo }/>;
    });
  }
}

const mapStateToProps = state => ({ videos: state.videoList });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ pickVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
