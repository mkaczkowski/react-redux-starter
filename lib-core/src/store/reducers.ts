import { combineReducers } from 'redux-immutable';
import authReducer from 'lib-core/src/reducers/auth';

export default function createReducer(injectedReducers: any) {
  return combineReducers({
    auth: authReducer,
    ...injectedReducers,
  });
}
