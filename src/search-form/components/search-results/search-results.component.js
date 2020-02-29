import React, { Component } from 'react';
import ResultCard from '../result-card/result-card.component';
import './search-results.css';

/**
 * @component
 * @name SearchResults
 * @description search results from the unsplash API
 * @author adam.caldwell
 */

class SearchResults extends Component {
  renderImages() {
    return this.props.images.map(image => {
      return <ResultCard key={image.id} image={image} />;
    });
  }

  render() {
    return <div className="image-list">{this.renderImages()}</div>;
  }
}

export default SearchResults;
