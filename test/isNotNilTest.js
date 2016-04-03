import test from 'ava'
import RS from '../lib/ramdasauce'

test('isNotNil', (t) => {
  t.ok(RS.isNotNil(1))
  t.notOk(RS.isNotNil(null))
  t.notOk(RS.isNotNil(undefined))
})
