import Ramda from 'ramda'
import log from './log'
import trace from './trace'
import toNumber from './toNumber'
import toDate from './toDate'
import isWithin from './isWithin'
import isNotWithin from './isNotWithin'
import eqLength from './eqLength'
import random from './random'
import sample from './sample'
import isNilOrEmpty from './isNilOrEmpty'
import isNotNil from './isNotNil'
import isUndefined from './isUndefined'
import mapKeys from './mapKeys'

const Ramdasauce = {
  log,
  trace,
  toNumber,
  toDate,
  isWithin,
  isNotWithin,
  eqLength,
  random,
  sample,
  isNilOrEmpty,
  isNotNil,
  isUndefined,
  mapKeys
}

// the default is our library
export default Ramdasauce

// but, provide a polluted version of ramda for convenience
export const R = Ramda.merge(Ramdasauce, Ramda)
