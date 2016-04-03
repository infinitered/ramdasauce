import R from 'ramda'

/**
 * Checks if something is not null or undefined.
 *
 * @since v0.1.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is not nil; false otherwise.
 * @example
 * RS.isNotNil(null) //=> false
 */
const isNotNil = R.complement(R.isNil)

export default isNotNil
