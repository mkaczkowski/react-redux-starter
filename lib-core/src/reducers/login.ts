import { fromJS } from 'immutable';
import { prepareActions, prepareReducers } from 'lib-core/src/utils/redux';
import { Action, ActionFunction1 } from 'redux-actions';
import { createSelector } from 'reselect';
import { LoginFormPayload } from '../model/form/LoginFormPayload';
import { ImmutableState } from '../model/State';
import { User } from '../model/User';

/* ------------- INITIAL STATE ------------- */
export type LoginState = {
  isLoading: boolean;
  user: User | null;
};

export type State = ImmutableState<LoginState>;

export const initialState: State = fromJS({
  isLoading: false,
  user: null,
});

/* ------------- ACTIONS ------------- */
type LoginActions = {
  loginAction: ActionFunction1<LoginFormPayload, Action<LoginFormPayload>>;
  loginSuccessAction: ActionFunction1<User, Action<User>>;
};

//prettier-ignore
export const actions = <LoginActions>prepareActions(
  {},
  ['login', true]);

/* ------------- REDUCER ------------- */
//prettier-ignore
export const reducer:any = prepareReducers(
  {
    [<any>actions.loginAction]: (state:State) => (
      state
        .set('isLoading', true)
    ),
    [<any>actions.loginSuccessAction]: (state:State, { payload }:Action<User>) =>
      state
        .set('isLoading', false)
        .set('user', payload || null)
  },
  initialState
);

/* ------------- Selectors ------------- */
//TODO global store type
export const selectors = {
  selectLogin: (state: { login: State }): State => state.login,
  isLoading: () => createSelector(selectors.selectLogin, (state: State) => state.get('isLoading')),
  getUser: () => createSelector(selectors.selectLogin, (state: State) => state.get('user')),
};
