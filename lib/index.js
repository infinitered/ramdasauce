import Ramda from 'ramda'
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

// the default is our library
export default RamdaSauce

// but, provide a polluted version of ramda for convenience
export const R = Ramda.merge(RamdaSauce, Ramda)
