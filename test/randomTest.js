import test from 'ava'
import RS from '../lib/ramdasauce'

// YIKES, how am I going to test this impure function?
test('random', (t) => {
  t.deepEqual(RS.random(3, 3), 3)
})
