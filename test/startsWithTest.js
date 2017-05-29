import test from 'ava'
import startsWith from '../lib/startsWith'

test('startsWith', t => {
  t.truthy(startsWith('h', 'hi'))
  t.truthy(startsWith('hell', 'hello'))
  t.falsy(startsWith('.', 'hi'))
})
