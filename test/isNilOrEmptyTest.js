import test from 'ava'
import isNilOrEmpty from '../lib/isNilOrEmpty'

test('isNilOrEmpty', (t) => {
  t.truthy(isNilOrEmpty())
  t.truthy(isNilOrEmpty(null))
  t.truthy(isNilOrEmpty(''))
  t.truthy(isNilOrEmpty([]))
  t.falsy(isNilOrEmpty([1]))
  t.falsy(isNilOrEmpty('hey'))
})
