import test from 'ava'
import RS from '../lib/ramdasauce'

test('toNumber', (t) => {
  t.same(RS.toNumber(null), null)
  t.same(RS.toNumber(undefined), undefined)
  t.same(RS.toNumber('42'), 42)
  t.same(RS.toNumber(42), 42)
})
