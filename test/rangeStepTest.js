import test from 'ava'
import RS from '../lib/'

test('rangeStep', (t) => {
  t.same(RS.rangeStep(2, 2, 6), [2, 4, 6])
  t.notOk(RS.rangeStep(0, 1, 10))
  t.notOk(RS.rangeStep(-1, 1, 5))
  t.notOk(RS.rangeStep(1, 5, 1))
})
