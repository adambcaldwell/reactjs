import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../redux/actions';
import AuthorHeader from './author-header.component';

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
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className=" large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <AuthorHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
