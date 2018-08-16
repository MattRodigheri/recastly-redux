import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  let callback = function() {
    let videos = searchYouTube({key: YOUTUBE_API_KEY, query: q}, function(data) {
      return data;
    });
    return {type: 'HANDLE_VIDEO_SEARCH', videos: videos};
  };

  return callback;
};

export default handleVideoSearch;
