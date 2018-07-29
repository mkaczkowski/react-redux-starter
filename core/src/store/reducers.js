import { combineReducers } from 'redux-immutable';
import authReducer from '@core/reducers/auth';

export default function createReducer(injectedReducers) {
  return combineReducers({
    auth: authReducer,
    ...injectedReducers,
  });
}
