import test from 'ava'
import RS from '../lib/'

test('isNilOrEmpty', (t) => {
  t.ok(RS.isNilOrEmpty())
  t.ok(RS.isNilOrEmpty(null))
  t.ok(RS.isNilOrEmpty(''))
  t.ok(RS.isNilOrEmpty([]))
  t.notOk(RS.isNilOrEmpty([1]))
  t.notOk(RS.isNilOrEmpty('hey'))
})
