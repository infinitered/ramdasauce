import test from 'ava'
import RS from '../lib/ramdasauce'

test('toNumber', (t) => {
  t.deepEqual(RS.toNumber(null), null)
  t.deepEqual(RS.toNumber(undefined), undefined)
  t.deepEqual(RS.toNumber('42'), 42)
  t.deepEqual(RS.toNumber(42), 42)
})
