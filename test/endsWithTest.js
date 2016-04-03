import test from 'ava'
import RS from '../lib/'

test('startsWith', (t) => {
  t.ok(RS.endsWith('i', 'hi'))
  t.ok(RS.endsWith('ello', 'hello'))
  t.notOk(RS.endsWith('.', 'hi'))
})
