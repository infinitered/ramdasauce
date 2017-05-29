import test from 'ava'
import toDate from '../lib/toDate'

test('toDate', t => {
  const d = Date.UTC(2047, 4, 23, 1, 46, 40)
  const numberDate = Number(d)
  const back = toDate(numberDate)

  t.deepEqual(Number(back), d)
  t.deepEqual(toDate(null), null)
  t.deepEqual(toDate(undefined), undefined)
})
