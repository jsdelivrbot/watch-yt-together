import * as videoActions from '../actions/video-actions';

export function videoList(state = [], action) {
  switch(action.type) {
    case videoActions.NEW_VIDEOS:
      return action.payload;
    default:
      return state;
  }
}

export function selectedVideoID(state = '', action) {
  switch(action.type) {
    case videoActions.PICK_VIDEO:
      return action.payload;
    default:
      return state;
  }
}
