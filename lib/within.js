import R from 'ramda'

const isNumber = R.is(Number)

/**
 * Given a min and max, determines if the value is included
 * in the range.
 *
 * This function is curried.
 *
 * @since v0.1.0
 * @sig Number a -> a -> a -> a
 * @param {Number} the minimum number
 * @param {Number} the maximum number
 * @param {Number} the value to test
 * @return {Boolean} is the value in the range?
 * @example
 *
 *      RS.within(1, 5, 3) //=> true
 *      RS.within(1, 5, 1) //=> true
 *      RS.within(1, 5, 5) //=> true
 *      RS.within(1, 5, 5.1) //=> false
 */
export default R.curry((min, max, value) => {
  return isNumber(min) && isNumber(max) && isNumber(value) && R.gte(value, min) && R.gte(max, value)
})
