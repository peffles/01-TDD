'use strict';

const greet = function greet(name) {
  if (typeof name !== 'string' || name === '') {
    return null;
  }

  return `Hello, ${name}!`;
};

module.exports = greet;

greet('wyatt');
greet('world');
greet(8);
greet('');

