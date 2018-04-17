const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('Should return Hello, name', () => {
      expect(greet.hi('wyatt')).toEqual('Hello, wyatt!');
    });
    test('should return null if there is an invalid entry', () => {
      expect(greet.hi('')).toEqual(null);
      expect(greet.hi()).toEqual(null);
    });
    test('looking for hello world', () => {
      expect(greet.hi('world')).toEqual('Hello, world!');
    });
  });
});
