import _ from 'lodash';
import jsonPlaceholder from '../../apis/json-placeholder.api';

/**
 * Redux action creators
 *
 * @author adam.caldwell
 */

/**
 *
 * @returns {function(...[*]=)}
 */
const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('posts');

  // dispatch the action
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

/*
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
*/

/**
 *
 * @param id
 * @returns {function(...[*]=)}
 */
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/**
 *
 * @returns {function(...[*]=)}
 */
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); // this executes the chain
};
