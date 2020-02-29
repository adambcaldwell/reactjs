import React, { Component } from 'react';

/**
 * @component class
 * @name SearchBar
 * @author adam.caldwell
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onFormSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSubmit(this.state.term);
  };

  // useful tip: 'onClick=' can be implemented on a 'div' element
  // onInputClick() {
  //   console.log("input was clicked");
  // }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              className="field"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
