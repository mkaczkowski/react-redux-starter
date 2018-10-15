import { fromJS } from 'immutable';
import { selectors, LoginState } from '../login';
import { User } from '../../model/User';

// HELPERS start
// TODO move to test util
const prepareGlobalState = (state: LoginState) => ({
  login: fromJS(state),
});

const expectSelector = (state: any) => (selector: any, expectedResult: any) => {
  return expect(selector(prepareGlobalState(state)).toJS()).toEqual(expectedResult);
};
// helpers end

describe('login selectors', () => {
  const loginState = {
    user: null,
    isLoading: false,
  };

  describe('selectLogin', () => {
    it('should select the login state', () => {
      const mockedState = { login: fromJS({ ...loginState }) };
      expect(selectors.selectLogin(mockedState)).toEqual(loginState);
    });
  });

  describe('isLoading', () => {
    it('should select the user', () => {
      const mockedState: LoginState = { ...loginState, isLoading: true };
      expectSelector(mockedState)(selectors.isLoading(), true);
    });
  });

  describe('getUser', () => {
    it('should select the user', () => {
      const user: User = { id: 246, username: 'test' };
      const mockedState: LoginState = { ...loginState, user };
      expectSelector(mockedState)(selectors.getUser(), user);
    });
  });
});
