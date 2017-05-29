import { anyPass, isNil, isEmpty } from 'ramda'

/**
 * Checks if something is null, undefined or R.isEmpty
 *
 * @since v1.0.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is null or empty; false otherwise.
 * @example
 * RS.isNilOrEmpty() //=> true
 */
const isNilOrEmpty = anyPass([isNil, isEmpty])

export default isNilOrEmpty
