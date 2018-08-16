var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.

  //Happens from a click in the video list or a change in videolist
  //When clicked, obviously display clicked vide. When new videolist updated, display video[0].
  //Output will be action w/ type: CHANGE, payload: currentVideo id
  // state.dispatch({type: 'changeVideo', payload: video.ID or title or something})
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;
