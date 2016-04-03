import test from 'ava'
import RS from '../lib/'

test('dotPath', (t) => {
  const obj = {a: {b: {c: [1, 2, 3]}}}
  t.is(RS.dotPath('a.b.c.0', obj), 1)
  t.notOk(RS.dotPath('a.x', obj))
})
