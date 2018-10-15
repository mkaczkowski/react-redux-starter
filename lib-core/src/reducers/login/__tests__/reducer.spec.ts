import { fromJS } from 'immutable';
import { loginReducer, loginFailedReducer, loginSuccessReducer, State } from '../login';
import { User } from '../../../model/User';

describe('login reducer', () => {
  let state: State;

  beforeEach(() => {
    state = fromJS({
      isLoading: false,
      user: null,
    });
  });

  describe('loginAction', () => {
    it('should handle the login action correctly', () => {
      const result = loginReducer(state);
      const expectedResult = {
        isLoading: true,
        user: null,
      };
      expect(result.toJS()).toEqual(expectedResult);
    });
  });

  describe('loginFailedAction', () => {
    it('should handle the loginSuccess action correctly', () => {
      state = state.set('isLoading', true);
      const result = loginFailedReducer(state);
      const expectedResult = {
        isLoading: false,
        user: null,
      };
      expect(result.toJS()).toEqual(expectedResult);
    });
  });

  describe('loginSuccessAction', () => {
    it('should handle the loginSuccess action correctly', () => {
      const payload: User = { id: 1, username: 'test' };
      const result = loginSuccessReducer(state, { payload });
      const expectedResult = {
        isLoading: false,
        user: payload,
      };
      expect(result.toJS()).toEqual(expectedResult);
    });
  });
});
