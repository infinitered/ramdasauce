import test from 'ava'
import sample from '../lib/sample'
import { contains } from 'ramda'

test('sample', (t) => {
  const options = [1, 2, 3, 4, 5, 'a', 'b', 'c']

  t.truthy(contains(sample(options), options))
  t.falsy(sample())
  t.falsy(sample(null))
  t.falsy(sample([]))
})
