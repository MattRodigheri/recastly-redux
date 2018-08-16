import Redux from 'redux';

let initialState = [];

var videoListReducer = (state = initialState, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    let newState = [];
    action.videos.forEach(function(video) {
      newState.push(video);
    });
    return newState;
  }
  return state;
};

export default videoListReducer;
