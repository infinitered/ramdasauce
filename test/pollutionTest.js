import test from 'ava'
import RamdaSauce, { R } from '../lib/index'

test('includes a polluted version of Ramda', (t) => {
  t.ok(R.equals)
  t.ok(R.pipe)
  t.ok(R.__)
})

test('the default export is not polluted', (t) => {
  t.notOk(RamdaSauce.equals)
  t.notOk(RamdaSauce.pipe)
  t.notOk(RamdaSauce.__)
})
