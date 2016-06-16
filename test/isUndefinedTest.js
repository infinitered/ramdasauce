import test from 'ava'
import RS from '../lib/ramdasauce'

test('isNilOrEmpty', (t) => {
  const x = undefined
  t.truthy(RS.isUndefined(x))
  t.truthy(RS.isUndefined())
  t.falsy(RS.isUndefined(null))
  t.falsy(RS.isUndefined('5'))
})
