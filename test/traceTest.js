import test from 'ava'
import R from 'ramda'
import RS from '../lib/ramdasauce'

test('trace', (t) => {
  const pipe = R.pipe(RS.trace('hey!'), R.toLower)
  t.same(pipe('LISTEN'), 'listen')
})
