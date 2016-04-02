import R from 'ramda'

/**
 * Converts the parameter to a string.
 *
 * String, null, and undefined will return themselves,
 * whereas everything else will try to be converted to
 * a String.
 *
 * @since v0.1.0
 * @param {Number} the Number to convert
 * @return {String} the String version
 * @example
 * RS.toString(5) //=> '5'
 */
const toString = R.cond([
  [R.isNil, R.identity],
  [R.is(String), R.identity],
  [R.T, (x) => String(x)]
])

export default toString
