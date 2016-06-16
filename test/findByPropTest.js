import test from 'ava'
import RS from '../lib/ramdasauce'

test('findByProp', (t) => {
  const obj1 = {uuid: '123', name: 'john'}
  const obj2 = {uuid: '345', name: 'Sam'}
  const array = [obj1, obj2]
  t.is(RS.findByProp('uuid', '123', array), obj1)
  t.is(RS.findByProp('name', 'Sam', array), obj2)
  t.falsy(RS.findByProp('age', '55', array))
})
