import test from 'ava'
import RS from '../lib/ramdasauce'

test('endsWith', (t) => {
  t.truthy(RS.endsWith('i', 'hi'))
  t.truthy(RS.endsWith('ello', 'hello'))
  t.falsy(RS.endsWith('.', 'hi'))
})
