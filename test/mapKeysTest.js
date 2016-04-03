import test from 'ava'
import R from 'ramda'
import RS from '../lib/'

test('mapKeys', (t) => {
  const old = {a: 1, b: 2}
  const upgrade = RS.mapKeys(R.toUpper, old)
  t.same(upgrade, {A: 1, B: 2})
})
