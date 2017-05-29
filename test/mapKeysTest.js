import test from 'ava'
import { toUpper } from 'ramda'
import mapKeys from '../lib/mapKeys'

test('mapKeys', (t) => {
  const old = {a: 1, b: 2}
  const upgrade = mapKeys(toUpper, old)

  t.deepEqual(upgrade, {A: 1, B: 2})
})
