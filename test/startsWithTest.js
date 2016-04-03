import test from 'ava'
import RS from '../lib/'

test('startsWith', (t) => {
  t.ok(RS.startsWith('h', 'hi'))
  t.ok(RS.startsWith('hell', 'hello'))
  t.notOk(RS.startsWith('.', 'hi'))
})
