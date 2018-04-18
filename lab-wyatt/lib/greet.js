'use strict';

const greet = module.exports = {};

greet.hi = (name) => {
  if (typeof name !== 'string' || name === '') {
    return null;
  }

  return `Hello, ${name}!`;
};

greet.hi('wyatt');
greet.hi('world');
greet.hi(8);
greet.hi('');
