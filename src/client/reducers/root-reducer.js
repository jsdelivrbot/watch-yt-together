import { combineReducers } from 'redux';

import { selectedVideoID, videoList } from './video-reducers';

const rootReducer = combineReducers({ selectedVideoID, videoList });

export default rootReducer;
