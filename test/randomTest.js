import test from 'ava'
import random from '../lib/random'

// YIKES, how am I going to test this impure function?
test('random', (t) => {
  t.deepEqual(random(3, 3), 3)
})
