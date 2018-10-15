import { actions } from '../login';
import { LoginFormPayload } from '../../../model/LoginFormPayload';
import { User } from '../../../model/User';

describe('login actions', () => {
  describe('loginAction', () => {
    it('should handle the login action correctly', () => {
      const fixture: LoginFormPayload = { username: 'usernmae_test', password: 'pass' };
      const result = actions.loginAction(fixture);
      expect(result).toEqual({});
    });
  });

  describe('loginSuccessAction', () => {
    it('should handle the loginSuccess action correctly', () => {
      const fixture: User = { id: 1, username: 'test' };
      const result = actions.loginSuccessAction(fixture);
      expect(result).toEqual({});
    });
  });
});
