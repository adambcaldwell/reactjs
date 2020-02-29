import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import CommentsApp from "./comments/comments.app";
// import SeasonApp from "./season-display/season.app";
// import SearchFormApp from "./search-form/search-form.app";

// Redux (P1)
/*
import Songs from "./redux-part-one-songs/songs-redux.app";
import reducers from './redux-part-one-songs/redux/reducers';
*/

import BlogPosts from "./redux-part-two-blog-posts/blog-posts-redux.app";
import reducers from './redux-part-two-blog-posts/redux/reducers';

/**
 * Generic for ReactJS Tutorial apps
 *
 * @author adam.caldwell
 */

// ReactDOM.render(<CommentsApp />, document.getElementById("root"));
// ReactDOM.render(<SeasonApp />, document.getElementById("root"));
// ReactDOM.render(<SearchFormApp />, document.getElementById("root"));

// Redux (P1) - Songs
/*
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Songs />
  </Provider>,
  document.getElementById("root")
);
*/

// Redux (P2) - Blog Posts
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BlogPosts />
  </Provider>,
  document.getElementById("root")
);
