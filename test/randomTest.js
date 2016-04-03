import test from 'ava'
import RS from '../lib/'

// YIKES, how am I going to test this impure function?
test('random', (t) => {
  t.same(RS.random(3, 3), 3)
})
