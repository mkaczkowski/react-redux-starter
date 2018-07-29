import { email, number, password, password_confirmation, required, ccn, tooShort } from '../validators';
import { ERROR_CODES } from '../../../constants/errorCodes';

describe('Validators', () => {
  describe('required', () => {
    it('should pass', () => {
      const value = 'test';
      const result = required()(value);
      expect(result).toBeUndefined();
    });

    it('should fail with empty value', () => {
      const value = '';
      const result = required()(value);
      expect(result).toEqual(ERROR_CODES.REQUIRED);
    });
  });

  describe('email', () => {
    it('should pass', () => {
      const value = 'test@gmail.com';
      const result = email()(value);
      expect(result).toBeUndefined();
    });

    it('should fail with invalid value', () => {
      const value = 'test';
      const result = email()(value);
      expect(result).toEqual(ERROR_CODES.EMAIL_IS_INVALID);
    });
  });

  describe('number', () => {
    it('should pass', () => {
      const value = 0;
      const result = number()(value);
      expect(result).toBeUndefined();
    });

    it('should fail with invalid value', () => {
      const value = 'test';
      const result = number()(value);
      expect(result).toEqual(ERROR_CODES.MUST_BE_A_NUMBER);
    });
  });
  describe('tooShort', () => {
    it('should pass', () => {
      const value = 'password';
      const result = tooShort()(value);
      expect(result).toBeUndefined();
    });

    it('should fail with invalid value', () => {
      const value = 'pas';
      const result = tooShort()(value);
      expect(result).toEqual(ERROR_CODES.TOO_SHORT);
    });
  });

  describe('password confirmation', () => {
    it('should pass', () => {
      const value = 'password';
      const allValues = {
        PASSWORD: 'password',
        password_confirmation: 'password',
      };
      const result = password_confirmation()(value, allValues);
      expect(result).toBeUndefined();
    });

    it('should fail with invalid value', () => {
      const value = 'password';
      const allValues = {
        PASSWORD: 'password',
        password_confirmation: 'password123',
      };
      const result = password_confirmation()(value, allValues);
      expect(result).toEqual(ERROR_CODES.PASSWORDS_NOT_MATCH);
    });
  });
});
