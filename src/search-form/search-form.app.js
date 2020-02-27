import React from "react";
import unsplash from './api/unsplash-api.config';
import SearchBar from "./components/search-bar/search-bar.component";
import SearchResults from "./components/search-results/search-results.component";

/**
 * Search Form App
 * @author adam.caldwell
 */

/**
 * @component class
 * @name FormSearchApp
 * @see {React.Component}
 */
class SearchFormApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('search/photos', {
        params: { query: term }
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SearchResults images={this.state.images} />
      </div>
    );
  }
}

export default SearchFormApp;