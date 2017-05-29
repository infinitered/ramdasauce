import { cond, isNil, identity, is, T } from 'ramda'

/**
 * Converts the parameter to a number.
 *
 * Number, null, and undefined will return themselves,
 * but everything else will be convert to a Number, or
 * die trying.
 *
 * @since v1.0.0
 * @param {String} the String to convert
 * @return {Number} the Number version
 * @example
 * RS.toNumber('7') //=> 7
 */
const toNumber = cond([
  [isNil, identity],
  [is(Number), identity],
  [T, (x) => Number(x)]
])

export default toNumber
