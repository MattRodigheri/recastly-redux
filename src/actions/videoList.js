var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  // type: 'changeVideoList',
  // payload: 'data from fetch (5 new videos)'
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;
