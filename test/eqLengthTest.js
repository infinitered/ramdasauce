import test from 'ava'
import eqLength from '../lib/eqLength'

test('eqLength', (t) => {
  t.truthy(eqLength('a', 'b'))
  t.truthy(eqLength([], ''))
  t.truthy(eqLength({length: 2}, 'ab'))
})
