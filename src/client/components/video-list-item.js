import React, { Component } from 'react';

const VideoListItem = props => {
  const { video } = props;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={ () => props.onClick(video.id.videoId) }>
      <div className='media'>
        <img className="media-object" src={ imageUrl }/>
      </div>
      <div className="media-body">
        <div className="media-heading">{ video.snippet.title }</div>
      </div>
    </li>
  );
}

export default VideoListItem;
