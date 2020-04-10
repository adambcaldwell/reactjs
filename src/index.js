import React from 'react';
import ReactDOM from 'react-dom';

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
/*
import BlogPosts from './redux-part-two-blog-posts/blog-posts-redux.app';
import reducers from './redux-part-two-blog-posts/redux/reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BlogPosts />
  </Provider>,
  document.getElementById('root')
);
*/

// Streaming Video App
/*
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import StreamClientApp from './streaming-video/streams/client/stream-client.app';
import reducers from './streaming-video/streams/client/redux/reducers';

// To start a debug session add '?debug_session=<some_string>' to the URL
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <StreamClientApp>Stream Client App</StreamClientApp>
  </Provider>,
  document.getElementById('root')
);
*/

// Context Example App
/*
import ContextApp from './using-context/context-basics/context-example.app';

ReactDOM.render(<ContextApp>Context App</ContextApp>, document.getElementById('root'));
*/

// Context over Redux App
import ContextReduxApp from './using-context/context-as-redux/context-over-redux';

ReactDOM.render(<ContextReduxApp>Context App</ContextReduxApp>, document.getElementById('root'));
