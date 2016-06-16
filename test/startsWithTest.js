import test from 'ava'
import RS from '../lib/ramdasauce'

test('startsWith', (t) => {
  t.truthy(RS.startsWith('h', 'hi'))
  t.truthy(RS.startsWith('hell', 'hello'))
  t.falsy(RS.startsWith('.', 'hi'))
})
