import R from 'ramda'

/**
 * Checks if something is null, undefined or R.isEmpty
 *
 * @since v0.1.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is null or empty; false otherwise.
 * @example
 * RS.isNilOrEmpty() //=> true
 */
const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty])

export default isNilOrEmpty
