import test from 'ava'
import RS from '../lib/ramdasauce'

test('isNilOrEmpty', (t) => {
  const x = undefined
  t.ok(RS.isUndefined(x))
  t.ok(RS.isUndefined())
  t.notOk(RS.isUndefined(null))
  t.notOk(RS.isUndefined('5'))
})
