import R from 'ramda'

/**
 * Determines if a string ends with another string.
 *
 * @since v1.0.0
 * @param {endsWith} (String) The ending string.
 * @param {source} (String) The string to test.
 * @return {Bool} True if the source ends with the first parameter; false otherwise.
 * @example
 * RS.endsWith('o', 'hello') //=> true
 */
const endsWith = R.curry(
  (subString, fullString) => R.equals(subString, R.takeLast(R.length(subString), fullString))
)

export default endsWith
