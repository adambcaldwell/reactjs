import { combineReducers } from 'redux';
import postsReducer from './posts.reducer';

/**
 * Redux reducers
 *
 * @author adam.caldwell
 */

export default combineReducers({
  posts: postsReducer
});
