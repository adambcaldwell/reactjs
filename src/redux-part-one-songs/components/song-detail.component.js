import React from 'react';
import { connect } from 'react-redux';

/**
 * @component functional
 * @name SongDetail
 * @description Details for the currently selected song
 * @author adam.caldwell
 */
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for: </h3>
      <p>Title: {song.title}</p>
      <br />
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
