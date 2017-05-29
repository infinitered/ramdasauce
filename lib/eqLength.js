import { eqProps } from 'ramda'

/**
 * Compares two objects to see if their length
 * properties are the same.
 *
 * @since v1.0.0
 * @param {x} (String|Array|Object) The first thing to compare.
 * @param {y} (String|Array|Object) The 2nd thing to compare.
 * @return {Bool} Wether the objects have the same length.
 * @example
 * RS.eqLength([], []) //=> true
 * RS.eqLength({length: 2}, 'ab') //=> true
 */
const eqLength = eqProps('length')

export default eqLength
