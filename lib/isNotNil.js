import { complement, isNil } from 'ramda'

/**
 * Checks if something is not null or undefined.
 *
 * @since v1.0.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is not nil; false otherwise.
 * @example
 * RS.isNotNil(null) //=> false
 */
const isNotNil = complement(isNil)

export default isNotNil
