import test from 'ava'
import isNotWithin from '../lib/isNotWithin'

const is200s = isNotWithin(200, 299)

test('isNotWithin', (t) => {
  t.false(is200s(200))
  t.false(is200s(200.1))
  t.false(is200s(299))
  t.true(is200s(199))
  t.true(is200s(299.1))
  t.true(is200s(300))
  t.true(is200s(null))
  t.true(isNotWithin(null, null, null))
})
