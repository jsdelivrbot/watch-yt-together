import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import YTSearch from 'youtube-api-search';
import YTAPIKEY from '../../../youtube.config';

import { setNewVideos } from '../actions/video-actions';

class VideoSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  render() {
    const onChange = e => this.setState({ value: e.target.value });
    return (
      <form onSubmit={ this.onSubmit.bind(this)}>
        <input
          type='text'
          value={ this.state.value }
          onChange={ onChange }
        />
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    YTSearch({ key: YTAPIKEY, term: this.state.value}, videos => {
      this.props.setNewVideos(videos);
    });
    this.setState({ value: '' });
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setNewVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoSearchBar);
