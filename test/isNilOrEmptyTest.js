import test from 'ava'
import RS from '../lib/ramdasauce'

test('isNilOrEmpty', (t) => {
  t.truthy(RS.isNilOrEmpty())
  t.truthy(RS.isNilOrEmpty(null))
  t.truthy(RS.isNilOrEmpty(''))
  t.truthy(RS.isNilOrEmpty([]))
  t.falsy(RS.isNilOrEmpty([1]))
  t.falsy(RS.isNilOrEmpty('hey'))
})
