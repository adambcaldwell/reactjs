import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth.reducer';
import streamsReducer from './stream.reducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});
