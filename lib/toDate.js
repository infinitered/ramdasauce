import { cond, isNil, identity, is, T } from 'ramda'

/**
 * Converts the parameter to a Date object.
 *
 * @since v1.0.0
 * @param {Number} number - The number to convert
 * @return {Object} The Date object
 * @example
 * RS.toDate(0) //=> The 0 as a Date object
 */
// converts something to a Date
const toDate = (number) => cond([
  [isNil, identity],
  [is(Object), identity],
  [T, (x) => new Date(x)]
])(number)

export default toDate
