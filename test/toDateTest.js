import test from 'ava'
import RS from '../lib/ramdasauce'

test('toDate', (t) => {
  t.deepEqual(RS.toDate(null), null)
  t.deepEqual(RS.toDate(undefined), undefined)
  const d = Date.UTC(2047, 4, 23, 1, 46, 40)
  const numberDate = Number(d)
  const back = RS.toDate(numberDate)
  t.deepEqual(Number(back), d)
})
