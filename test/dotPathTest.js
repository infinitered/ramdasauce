import test from 'ava'
import dotPath from '../lib/dotPath'

test('dotPath', (t) => {
  const obj = {a: {b: {c: [1, 2, 3]}}}

  t.is(dotPath('a.b.c.0', obj), 1)
  t.falsy(dotPath('a.x', obj))
})
