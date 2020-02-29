/**
 * Redux action creators
 *
 * @author adam.caldwell
 */

/* eslint-disable-next-line import/prefer-default-export */
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
