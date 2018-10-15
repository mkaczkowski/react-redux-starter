import { fromJS } from 'immutable';
import { prepareActions, prepareReducers } from 'lib-core/src/utils/redux';
import { Action, ActionFunction1 } from 'redux-actions';
import { createSelector } from 'reselect';
import { LoginFormPayload } from '../../model/LoginFormPayload';
import { ImmutableState } from '../../model/State';
import { User } from '../../model/User';

/* ------------- INITIAL STATE ------------- */
export type LoginState = {
  isLoading: boolean;
  user?: User | null;
};

export const initialState: LoginState = {
  isLoading: false,
  user: null,
};

export type State = ImmutableState<LoginState>;

/* ------------- ACTIONS ------------- */
export type LoginActions = {
  loginAction: ActionFunction1<LoginFormPayload, Action<LoginFormPayload>>;
  loginSuccessAction: ActionFunction1<User, Action<User>>;
  loginFailedAction: ActionFunction1<User, Action<any>>;
};

export const actions = <LoginActions>prepareActions(
  {
    //we can modify payload for action like this:
    ['loginSuccessAction']: payload => payload.trim().toUpperCase(),
  },
  //By default payload is passed unmodified
  ['login', true, true]
  // ['login'] :: means only loginAction will be created
  // ['login' , true ] :: loginAction and loginSuccessAction will be created
  // ['login' , true, true ] :: loginAction, loginSuccessAction, loginFailedAction
);

/* ------------- REDUCER ------------- */

/*  login  */
export const loginReducer = (state: State) => {
  return state.set('isLoading', true);
};
export const loginFailedReducer = (state: State) => {
  return state.set('isLoading', false);
};
export const loginSuccessReducer = (state: State, { payload }: Partial<Action<User>>) => {
  return state.set('isLoading', false).set('user', payload);
};

export const reducer: any = prepareReducers(
  {
    [<any>actions.loginAction]: loginReducer,
    [<any>actions.loginFailedAction]: loginFailedReducer,
    [<any>actions.loginSuccessAction]: loginSuccessReducer,
  },
  fromJS(initialState)
);

/* ------------- Selectors ------------- */
export const selectors = {
  selectLogin: (state: any): State => state.login,
  isLoading: () => createSelector(selectors.selectLogin, (state: State) => state.get('isLoading')),
  getUser: () => createSelector(selectors.selectLogin, (state: State) => state.get('user')),
};
