import test from 'ava'
import R from 'ramda'
import RS from '../lib/ramdasauce'

test('log', (t) => {
  const pipe = R.pipe(R.take(3), RS.log, R.toLower)
  t.same(pipe('LOLOL'), 'lol')
})
