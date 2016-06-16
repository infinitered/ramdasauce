import test from 'ava'
import RS from '../lib/ramdasauce'

test('dotPath', (t) => {
  const obj = {a: {b: {c: [1, 2, 3]}}}
  t.is(RS.dotPath('a.b.c.0', obj), 1)
  t.falsy(RS.dotPath('a.x', obj))
})
