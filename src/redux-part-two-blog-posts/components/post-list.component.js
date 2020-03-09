import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';

/**
 * @component class
 * @name PostList
 * @description a list of blog posts
 * @author adam.caldwell
 * @see {React.Component}
 */
/* eslint-disable-next-line react/prefer-stateless-function */
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div className="ui list">PostList</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
