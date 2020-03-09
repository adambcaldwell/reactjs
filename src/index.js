import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * Generic for ReactJS Tutorial apps
 *
 * @author adam.caldwell
 */
/*
import CommentsApp from './comments/comments.app';
ReactDOM.render(<CommentsApp />, document.getElementById('root'));
*/

/*
import SearchFormApp from './search-form/search-form.app';
ReactDOM.render(<SearchFormApp />, document.getElementById('root'));
*/

// Redux (P1) - Songs
/*
import Songs from './redux-part-one-songs/songs-redux.app';
import reducers from './redux-part-one-songs/redux/reducers';
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Songs />
  </Provider>,
  document.getElementById('root')
);
*/

// Redux (P2) - Blog Posts
import BlogPosts from './redux-part-two-blog-posts/blog-posts-redux.app';
import reducers from './redux-part-two-blog-posts/redux/reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BlogPosts />
  </Provider>,
  document.getElementById('root')
);
