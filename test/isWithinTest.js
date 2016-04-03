import test from 'ava'
import RS from '../lib/'

const is200s = RS.isWithin(200, 299)

test('isWithin', (t) => {
  t.true(is200s(200))
  t.true(is200s(200.1))
  t.true(is200s(299))
  t.false(is200s(199))
  t.false(is200s(299.1))
  t.false(is200s(300))
  t.false(is200s(null))
  t.false(RS.isWithin(null, null, null))
})
