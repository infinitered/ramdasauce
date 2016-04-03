import test from 'ava'
import RS from '../lib/ramdasauce'

test('startsWith', (t) => {
  t.ok(RS.endsWith('i', 'hi'))
  t.ok(RS.endsWith('ello', 'hello'))
  t.notOk(RS.endsWith('.', 'hi'))
})
