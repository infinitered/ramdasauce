import R from 'ramda'
import isWithin from './isWithin'

/**
 * Given a min and max, determines if the value is not
 * included in the range.
 *
 * This function is curried.
 *
 * @since v1.0.0
 * @sig Number a -> a -> a -> a
 * @param {Number} the minimum number
 * @param {Number} the maximum number
 * @param {Number} the value to test
 * @return {Boolean} True if the value is not included; otherwise false.
 * @example
 * RS.isNotWithin(1, 5, 3) //=> false
 * RS.isNotWithin(1, 5, 1) //=> false
 * RS.isNotWithin(1, 5, 5) //=> false
 * RS.isNotWithin(1, 5, 5.1) //=> true
 */
// export default R.curry((min, max, value) => R.complement(isWithin(min, max, value)))
export default R.complement(isWithin)
