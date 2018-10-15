import { fromJS } from 'immutable';
import { reducer, actions, State } from '../login';
import { LoginFormPayload } from '../../model/form/LoginFormPayload';
import { User } from '../../model/User';

describe('login reducer', () => {
  let state: State;

  beforeEach(() => {
    state = fromJS({
      isLoading: false,
      user: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  describe('loginAction', () => {
    it('should handle the login action correctly', () => {
      const fixture: LoginFormPayload = { username: 'usernmae_test', password: 'pass' };

      const expectedResult = {
        isLoading: true,
        user: null,
      };

      const result = reducer(state, actions.loginAction(fixture));
      expect(result.toJS()).toEqual(expectedResult);
    });
  });

  describe('loginSuccessAction', () => {
    it('should handle the loginSuccess action correctly', () => {
      const fixture: User = { id: 1, username: 'test' };

      const expectedResult = {
        isLoading: false,
        user: fixture,
      };

      const result = reducer(state, actions.loginSuccessAction(fixture));
      expect(result.toJS()).toEqual(expectedResult);
    });
  });
});
