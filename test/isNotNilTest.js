import test from 'ava'
import RS from '../lib/ramdasauce'

test('isNotNil', (t) => {
  t.truthy(RS.isNotNil(1))
  t.falsy(RS.isNotNil(null))
  t.falsy(RS.isNotNil(undefined))
})
