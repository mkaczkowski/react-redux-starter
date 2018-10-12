import * as utils from './replacer';

describe('Replacer', () => {
  describe('removeWhitespacesAndDashes', () => {
    it('should pass', () => {
      const value = '12345b';
      const result = utils.removeWhitespacesAndDashes(value);
      expect(result).toEqual('12345b');
    });

    it('should pass', () => {
      const value = 'a23 456';
      const result = utils.removeWhitespacesAndDashes(value);
      expect(result).toEqual('a23456');
    });

    it('should pass', () => {
      const value = ' 1s3 456 ';
      const result = utils.removeWhitespacesAndDashes(value);
      expect(result).toEqual('1s3456');
    });

    it('should pass', () => {
      const value = ' 1s-3 4--56 -';
      const result = utils.removeWhitespacesAndDashes(value);
      expect(result).toEqual('1s3456');
    });
  });
});
