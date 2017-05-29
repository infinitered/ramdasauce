import test from 'ava'
import { pipe, take, toLower } from 'ramda'
import log from '../lib/log'

test('log', (t) => {
  console.log = () => {}

  const p = pipe(take(3), log, toLower)

  t.deepEqual(p('LOLOL'), 'lol')
})
