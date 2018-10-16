import { login } from '../login';
import { LoginFormPayload } from '../../model/LoginFormPayload';

//TODO verify if we have the access to API otherwise we can mock axios and check flow
describe('Login Api - e2e', () => {
  describe('login', () => {
    it('should login with credentials', async () => {
      const params: LoginFormPayload = {
        username: 'testUser',
        password: 'testPass',
      };

      const data = await login(params);
      expect(data).toBeDefined();
      expect(data.id).toBeDefined();
      expect(data.username).toBeDefined();

      //TODO optionally we can check snapshot
    });
  });
});
