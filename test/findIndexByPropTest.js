import test from 'ava'
import RS from '../lib/ramdasauce'

test('findIndexByProp', (t) => {
  const obj1 = {uuid: '123', name: 'john'}
  const obj2 = {uuid: '345', name: 'Sam'}
  const array = [obj1, obj2]
  t.is(RS.findIndexByProp('uuid', '123', array), 0)
  t.is(RS.findIndexByProp('name', 'Sam', array), 1)
  t.is(RS.findIndexByProp('age', '55', array), -1)
})
