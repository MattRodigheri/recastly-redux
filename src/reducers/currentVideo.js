import Redux from 'redux';

const initialState = null;

var currentVideoReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video || null;
  }
  return state;
};

export default currentVideoReducer;
