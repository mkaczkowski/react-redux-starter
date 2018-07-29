import * as utils from './restrict';

let e;
let result;

describe('Restrict', () => {
  describe('digits only', () => {
    it('should pass', () => {
      e = { keyCode: 49 /*1*/ };
      result = utils.restrictCharacters(utils.DIGITS)(e);
      expect(result).toBe(true);
    });

    it('should fail', () => {
      e = { keyCode: 65 /*a*/ };
      result = utils.restrictCharacters(utils.DIGITS)(e);
      expect(result).toBe(false);

      e = { keyCode: 190 /*.*/ };
      result = utils.restrictCharacters(utils.DIGITS)(e);
      expect(result).toBe(false);
    });
  });
  //
  describe('number only', () => {
    it('should pass', () => {
      e = { keyCode: 49 /*1*/ };
      result = utils.restrictCharacters(utils.NUMBERS)(e);
      expect(result).toBe(true);
      // e = { keyCode: 190 /*.*/ }
      // result = utils.restrictCharacters(utils.NUMBERS)(e)
      // expect(result).toBe(true)
    });

    it('should fail', () => {
      e = { keyCode: 65 /*a*/ };
      result = utils.restrictCharacters(utils.NUMBERS)(e);
      expect(result).toBe(false);
    });
  });

  describe('letters only', () => {
    it('should pass', () => {
      const e = { keyCode: 65 /*a*/ };
      const result = utils.restrictCharacters(utils.LETTERS)(e);
      expect(result).toBe(true);
    });

    it('should fail', () => {
      e = { keyCode: 49 /*1*/ };
      result = utils.restrictCharacters(utils.LETTERS)(e);
      expect(result).toBe(false);

      e = { keyCode: 190 /*.*/ };
      result = utils.restrictCharacters(utils.LETTERS)(e);
      expect(result).toBe(false);
    });
  });
});
