// import _ from 'lodash';
import jsonPlaceholder from '../../apis/json-placeholder.api';

/**
 * Redux action creators
 *
 * @author adam.caldwell
 */

/* eslint-disable-next-line import/prefer-default-export */
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('posts');

  // dispatch the action
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
