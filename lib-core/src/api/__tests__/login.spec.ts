import mockedAxios from 'axios';
import { login, LoginApiData } from '../login';
import { LoginFormPayload } from '../../model/LoginFormPayload';

jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe('Login Api', () => {
  describe('login', () => {
    it('should login with credentials', async () => {
      const params: LoginFormPayload = {
        username: 'testUser',
        password: 'testPass',
      };

      await login(params);

      const expectedToBeCalledWith = [
        '/users/sign_in',
        {
          user: {
            ...params,
          },
        } as LoginApiData,
      ];

      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(mockedAxios.post).toBeCalledWith(...expectedToBeCalledWith);
    });
  });
});
