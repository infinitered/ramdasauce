import test from 'ava'
import RS from '../lib/'

test('toString', (t) => {
  t.same(RS.toString(null), null)
  t.same(RS.toString(undefined), undefined)
  t.same(RS.toString(42), '42')
  t.same(RS.toString('hi'), 'hi')
})
