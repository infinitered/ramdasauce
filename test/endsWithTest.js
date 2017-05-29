import test from 'ava'
import endsWith from '../lib/endsWith'

test('endsWith', (t) => {
  t.truthy(endsWith('i', 'hi'))
  t.truthy(endsWith('ello', 'hello'))
  t.falsy(endsWith('.', 'hi'))
})
