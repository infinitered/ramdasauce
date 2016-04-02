import R from 'ramda'
import log from './log'
import trace from './trace'
import toString from './toString'
import toNumber from './toNumber'
import toDate from './toDate'
import within from './within'

const RamdaSauce = {
  log,
  trace,
  toString,
  toNumber,
  toDate,
  within
}

export default R.merge(RamdaSauce, R)
