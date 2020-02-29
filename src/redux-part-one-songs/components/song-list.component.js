import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../redux/actions';

/**
 * @component class
 * @name SongList
 * @description a list of (selectable) songs
 * @author adam.caldwell
 * @see {React.Component}
 */
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="content">
            <button
              type="button"
              className="ui right floated button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

// connect()() informs 'react-redux' that we want to connect to the redux store
export default connect(mapStateToProps, { selectSong })(SongList);
