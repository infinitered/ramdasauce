import test from 'ava'
import RS from '../lib/ramdasauce'
import R from 'ramda'

test('sample', (t) => {
  const options = [1, 2, 3, 4, 5, 'a', 'b', 'c']
  const sample = RS.sample(options)
  t.ok(R.contains(sample, options))
  t.notOk(RS.sample())
  t.notOk(RS.sample(null))
  t.notOk(RS.sample([]))
})
