import test from 'ava'
import toNumber from '../lib/toNumber'

test('toNumber', (t) => {
  t.deepEqual(toNumber(null), null)
  t.deepEqual(toNumber(undefined), undefined)
  t.deepEqual(toNumber('42'), 42)
  t.deepEqual(toNumber(42), 42)
})
