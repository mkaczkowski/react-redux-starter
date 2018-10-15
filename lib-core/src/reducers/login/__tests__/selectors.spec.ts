import { selectors, LoginState } from '../index';
import { User } from '../../../model/User';
import { expectSelector } from '../../../utils/test/selector';

const reducerRoot = 'login';

describe('login selectors', () => {
  const loginState = {
    user: null,
    isLoading: false,
  };

  describe('selectLogin', () => {
    it('should select the login state', () => {
      expect(selectors.selectLogin({ [reducerRoot]: loginState })).toEqual(loginState);
    });
  });

  describe('isLoading', () => {
    it('should select the user', () => {
      const mockedState: LoginState = { ...loginState, isLoading: true };
      expectSelector({ [reducerRoot]: mockedState })(selectors.isLoading(), true);
    });
  });

  describe('getUser', () => {
    it('should select the user', () => {
      const user: User = { id: 246, username: 'test' };
      const mockedState: LoginState = { ...loginState, user };
      expectSelector({ [reducerRoot]: mockedState })(selectors.getUser(), user);
    });
  });
});
