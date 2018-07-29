import { login } from '../auth';
import CONFIG from '@core/config';

describe('Api Auth IT', () => {
  describe('login', () => {
    it('should login with credentials', async () => {
      const params = {
        email: CONFIG.api.userLogin,
        password: CONFIG.api.userPassword,
        remember_me: '0',
      };

      const data = await login(params);
      expect(data).toBeDefined();
      expect(data.auth_token).toBeDefined();
      expect(data.country).toBeDefined();
      expect(data.email).toBeDefined();
      expect(data.language).toBeDefined();
      expect(data.sign_in_count).toBeDefined();
      expect(data.subscription).toBeDefined();
      expect(data.update_credentials).toBeDefined();

      expect(data).toMatchInlineSnapshot(
        {
          auth_token: expect.any(String),
          language: expect.any(String),
          sign_in_count: expect.any(Number),
        },
        `
Object {
  "auth_token": Any<String>,
  "country": "FR",
  "email": "user@example.com",
  "language": Any<String>,
  "sign_in_count": Any<Number>,
  "subscription": Object {
    "currency": "EUR",
    "expire_date": null,
    "next_billing_date": "2018-07-13",
    "operator_name": null,
    "price": "3.99",
    "start_date": "2017-11-16T12:52:19.000Z",
    "trial": false,
  },
  "update_credentials": false,
}
`
      );
    });
  });
});
