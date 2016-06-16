import test from 'ava'
import RS from '../lib/ramdasauce'

test('eqLength', (t) => {
  t.truthy(RS.eqLength('a', 'b'))
  t.truthy(RS.eqLength([], ''))
  t.truthy(RS.eqLength({length: 2}, 'ab'))
})
