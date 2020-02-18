const get = require('lodash.get');

const compare = (obj1, obj2, keys) =>
  keys.every(key =>
    Array.isArray(key)
      ? get(obj1, key[0]) === get(obj2, key[1] || key[0])
      : get(obj1, key) === get(obj2, key),
  );

module.exports = compare;
