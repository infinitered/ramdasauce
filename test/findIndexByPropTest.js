import test from 'ava'
import findIndexByProp from '../lib/findIndexByProp'

test('findIndexByProp', (t) => {
  const obj1 = {uuid: '123', name: 'john'}
  const obj2 = {uuid: '345', name: 'Sam'}
  const array = [obj1, obj2]

  t.is(findIndexByProp('uuid', '123', array), 0)
  t.is(findIndexByProp('name', 'Sam', array), 1)
  t.is(findIndexByProp('age', '55', array), -1)
})
