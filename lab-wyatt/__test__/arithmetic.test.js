'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('should return the sum of the two numbers', () => {
      expect(arithmetic.add(50, 50)).toEqual(100);
    });
    test('return null if one or both values is NaN', () => {
      expect(arithmetic.add('kitty', true)).toEqual(null);
    });
  });
  describe('arithmetic.sub', () => {
    test('should return the difference of the two numbers', () => {
      expect(arithmetic.sub(45, 90)).toEqual(45);
    });
    test('return null if one or both values is NaN', () => {
      expect(arithmetic.add('cat', false)).toEqual(null);
    });
  });
});
