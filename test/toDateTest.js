import test from 'ava'
import RS from '../lib/'

test('toDate', (t) => {
  t.same(RS.toDate(null), null)
  t.same(RS.toDate(undefined), undefined)
  const d = Date.UTC(2047, 4, 23, 1, 46, 40)
  const numberDate = Number(d)
  const back = RS.toDate(numberDate)
  t.same(Number(back), d)
})
