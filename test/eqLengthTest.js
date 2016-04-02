import test from 'ava'
import RS from '../lib/'

test('eqLength', (t) => {
  t.ok(RS.eqLength('a', 'b'))
  t.ok(RS.eqLength([], ''))
  t.ok(RS.eqLength({length: 2}, 'ab'))
})
