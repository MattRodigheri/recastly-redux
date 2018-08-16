import Redux from 'redux';

const initialState = null;

var currentVideoReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    let newState = Object.assign({}, state);
    newState = action.video;
    return newState;
  }
  return state;
};

export default currentVideoReducer;
