import R from 'ramda'

/**
 * Given a min and max, determines if the value is included
 * in the range.
 *
 * This function is curried.
 *
 * @since v1.0.0
 * @sig Number a -> a -> a -> a
 * @param {Number} the minimum number
 * @param {Number} the maximum number
 * @param {Number} the value to test
 * @return {Boolean} is the value in the range?
 * @example
 * RS.isWithin(1, 5, 3) //=> true
 * RS.isWithin(1, 5, 1) //=> true
 * RS.isWithin(1, 5, 5) //=> true
 * RS.isWithin(1, 5, 5.1) //=> false
 */
export default R.curry((min, max, value) => {
  const isNumber = R.is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && R.gte(value, min) && R.gte(max, value)
})
