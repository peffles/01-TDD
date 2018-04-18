'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (num1, num2) => {
  const sum = num1 + num2;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  }
  return sum;
};
arithmetic.sub = (num1, num2) => {
  const difference = num2 - num1;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  }
  return difference;
};
arithmetic.add('kitty', true);
arithmetic.add(50, 50);
arithmetic.sub(45, 90);
arithmetic.sub('cat', false);
