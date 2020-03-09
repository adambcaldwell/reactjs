import { combineReducers } from 'redux';
import postsReducer from './posts.reducer';
import usersReducer from './users.reducer';

/**
 * Redux reducers
 *
 * @author adam.caldwell
 */

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
