'use strict';

const greet = require('../lib/greet.js');

describe('greet.test.js', () => {
  describe('greet', () => {
    test('Should return Hello, name', () => {
      expect(greet('wyatt')).toEqual('Hello, wyatt!');
    });
    test('should return null if there is an invalid entry', () => {
      expect(greet('')).toEqual(null);
      expect(greet()).toEqual(null);
    });
    test('looking for hello world', () => {
      expect(greet('world')).toEqual('Hello, world!');
    });
  });
});
