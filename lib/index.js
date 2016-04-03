import Ramda from 'ramda'
import log from './log'
import trace from './trace'
import toNumber from './toNumber'
import toDate from './toDate'
import within from './within'
import eqLength from './eqLength'
import random from './random'

const Ramdasauce = {
  log,
  trace,
  toNumber,
  toDate,
  within,
  eqLength,
  random
}

// the default is our library
export default Ramdasauce

// but, provide a polluted version of ramda for convenience
export const R = Ramda.merge(Ramdasauce, Ramda)
