import R from 'ramda'
import log from './log'
import trace from './trace'
import toNumber from './toNumber'
import toDate from './toDate'
import within from './within'

const RamdaSauce = {
  log,
  trace,
  toNumber,
  toDate,
  within
}

export default R.merge(RamdaSauce, R)
