import test from 'ava'
import { pipe, toLower } from 'ramda'
import trace from '../lib/trace'

test('trace', (t) => {
  console.log = () => {}

  const p = pipe(trace('hey!'), toLower)

  t.deepEqual(p('LISTEN'), 'listen')
})
