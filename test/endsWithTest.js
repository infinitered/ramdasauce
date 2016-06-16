import test from 'ava'
import RS from '../lib/ramdasauce'

test('startsWith', (t) => {
  t.truthy(RS.endsWith('i', 'hi'))
  t.truthy(RS.endsWith('ello', 'hello'))
  t.falsy(RS.endsWith('.', 'hi'))
})
