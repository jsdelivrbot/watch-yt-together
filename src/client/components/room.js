import React, { Component } from 'react';

import VideoList from '../containers/video-list';
import VideoPlayer from '../containers/video-player';
import VideoSearchBar from '../containers/video-search-bar';

export default class Room extends Component {
  render() {
    return (
      <div>
        <VideoSearchBar/>
        <VideoPlayer/>
        <VideoListItem/>
      </div>
    );
  }
}

