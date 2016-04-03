/**
 * Checks if something is undefined.
 *
 * @since v1.0.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is undefined; false otherwise.
 * @example
 * RS.isUndefined(asdf) //=> false
 */
const isUndefined = (x) => typeof x === 'undefined'

export default isUndefined
