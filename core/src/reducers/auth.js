//@flow
import { fromJS } from 'immutable';
import { prepareActions, prepareReducers } from '@core/utils/redux';
import { createSelector } from 'reselect';
import type { User } from '@core/constants/flowTypes';

export type AuthType = {
  isLoading: boolean,
  user: User,
};

export type AuthStoreType = Map<string, AuthType>;

export const initialState: AuthStoreType = fromJS({
  isLoading: true,
  user: null,
});

export type AuthActions = {
  authAction: any,
  authSuccessAction: any,
  loginAction: any,
  loginSuccessAction: any,
};

//prettier-ignore
export const actions: AuthActions = prepareActions({},
  ['auth', true],
  ['login', true]
);

//prettier-ignore
export default prepareReducers(
  {
    [actions.authAction]: state => state.set('isLoading', true),
    [actions.authSuccessAction]: (state, { payload }) => (
      state
        .set('isLoading', false)
        .set('user', payload)
    ),
    [actions.loginSuccessAction]: (state, { payload }) => state.set('user', payload)
  },
  initialState
);

/* ------------- Selectors ------------- */
const selectAuth = (state: Map<string, any>): any => state.get('auth');
export const selectors = {
  selectAuth,
  isLoading: () => createSelector(selectAuth, auth => auth.get('isLoading')),
  getUser: () => createSelector(selectAuth, auth => auth.get('user')),
};
