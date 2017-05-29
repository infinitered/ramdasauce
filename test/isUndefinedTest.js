import test from 'ava'
import isUndefined from '../lib/isUndefined'

test('isUndefined', (t) => {
  const x = undefined

  t.truthy(isUndefined(x))
  t.truthy(isUndefined())
  t.falsy(isUndefined(null))
  t.falsy(isUndefined('5'))
})
