const a = { a: 1, b: 2 };
const b = { b: 1, c: 2 };
const c = { a: 1, b: 2 };
const d = { a: 1, d: 2 };
const e = { a: { b: 1, c: 2 } };
const f = { a: { b: 1, c: 3 } };
const g = { a: { b: 1, d: 2 } };
const h = { a: { b: 1, c: 2 } };

const testCases = [
  [[a, b, [['a', 'a'],['b', 'b']]], false],
  [[a, c, ['a', 'b']], true],
  [[a, b, [['a', 'b'],['b', 'c']]], true],
  [[a, d, ['a', ['b', 'd']]], true],
  [[e, f, ['a.b', 'a.c']], false],
  [[e, g, ['a.b', 'a.c']], false],
  [[e, g, ['a.b', ['a.c', 'a.d']]], true],
  [[e, h, ['a.b', 'a.c']], true],
]

module.exports = testCases