import R from 'ramda'

/**
 * Determines if a string starts with another string.
 *
 * @since v1.0.0
 * @param {startWith} (String) The starting string.
 * @param {source} (String) The string to test.
 * @return {Bool} True if the source starts with the first parameter; false otherwise.
 * @example
 * RS.startsWith('h', 'hello') //=> true
 */
const startsWith = R.curry(
  (subString, fullString) => R.equals(subString, R.take(R.length(subString), fullString))
)

export default startsWith
