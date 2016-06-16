import test from 'ava'
import RS from '../lib/ramdasauce'
import R from 'ramda'

test('sample', (t) => {
  const options = [1, 2, 3, 4, 5, 'a', 'b', 'c']
  const sample = RS.sample(options)
  t.truthy(R.contains(sample, options))
  t.falsy(RS.sample())
  t.falsy(RS.sample(null))
  t.falsy(RS.sample([]))
})
