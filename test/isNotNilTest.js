import test from 'ava'
import isNotNil from '../lib/isNotNil'

test('isNotNil', (t) => {
  t.truthy(isNotNil(1))
  t.falsy(isNotNil(null))
  t.falsy(isNotNil(undefined))
})
