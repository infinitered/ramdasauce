import test from 'ava'
import RS from '../lib/ramdasauce'

test('rangeStep', (t) => {
  t.deepEqual(RS.rangeStep(2, 2, 6), [2, 4, 6])
  t.falsy(RS.rangeStep(0, 1, 10))
  t.falsy(RS.rangeStep(-1, 1, 5))
  t.falsy(RS.rangeStep(1, 5, 1))
})
