const testCases = require('./test-cases');
const compare = require('..');
const { strictEqual } = require('assert');

describe('compare', () => {
  testCases.forEach(([args, expected]) => {
    it(`returns ${expected} with args ${JSON.stringify(args)}`, () => {
      strictEqual(compare(...args), expected);
    });
  });
});
