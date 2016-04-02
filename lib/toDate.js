import R from 'ramda'

/**
 * Converts the parameter to a Date object.
 *
 * @since v0.1.0
 * @param {Number} number - The number to convert
 * @return {Object} The Date object
 * @example
 * RS.toDate(0) //=> The 0 as a Date object
 */
// converts something to a Date
const toDate = (number) => R.cond([
  [R.isNil, R.identity],
  [R.is(Object), R.identity],
  [R.T, (x) => new Date(x)]
])(number)

export default toDate
