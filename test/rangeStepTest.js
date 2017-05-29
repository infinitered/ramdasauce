import test from 'ava'
import rangeStep from '../lib/rangeStep'

test('rangeStep', (t) => {
  t.deepEqual(rangeStep(2, 2, 6), [2, 4, 6])
  t.falsy(rangeStep(0, 1, 10))
  t.falsy(rangeStep(-1, 1, 5))
  t.falsy(rangeStep(1, 5, 1))
})
