import R from 'ramda'
import log from './log'
import trace from './trace'
import toString from './toString'
import toNumber from './toNumber'
import toDate from './toDate'
import within from './within'

const RamdaSauce = {
  ...R, // bring in everything from ramda
  log,
  trace,
  toString,
  toNumber,
  toDate,
  within
}

export default RamdaSauce
