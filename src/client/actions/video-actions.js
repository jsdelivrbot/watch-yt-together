export const NEW_VIDEOS = 'NEW_VIDEOS';
export function setNewVideos(videos) {
  return { type: NEW_VIDEOS, payload: videos };
}

export const PICK_VIDEO = 'PICK_VIDEO';
export function pickVideo(videoID) {
  return { type: PICK_VIDEO, payload: videoID };
}
