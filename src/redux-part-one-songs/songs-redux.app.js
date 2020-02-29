import React from 'react';
import SongList from './components/song-list.component';
import SongDetail from './components/song-detail.component';

/**
 * @component functional
 * @name Songs
 * @description Songs with Redux application
 * @author adam.caldwell
 */
const Songs = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default Songs;
