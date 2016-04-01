import test from 'ava'
import R from '../lib/index'

test('includes Ramda', (t) => {
  t.ok(R.equals)
  t.ok(R.pipe)
  t.ok(R.__)
})
