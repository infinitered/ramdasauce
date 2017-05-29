import test from 'ava'
import findByProp from '../lib/findByProp'

test('findByProp', (t) => {
  const obj1 = {uuid: '123', name: 'john'}
  const obj2 = {uuid: '345', name: 'Sam'}
  const array = [obj1, obj2]

  t.is(findByProp('uuid', '123', array), obj1)
  t.is(findByProp('name', 'Sam', array), obj2)
  t.falsy(findByProp('age', '55', array))
})
