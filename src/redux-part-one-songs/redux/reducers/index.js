import { combineReducers } from "redux";

/**
 * Redux reducers
 *
 * @author adam.caldwell
 */

const songsReducer = () => {
  return [
    {title: 'Voracity', duration: '3:46'},
    {title: 'Unravel', duration: '3:55'},
    {title: 'Glassy Sky', duration: '5:00'},
    {title: 'Crossing Field', duration: '4:05 '}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch(action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});