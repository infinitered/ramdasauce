import { curry, startsWith as newStartsWith } from 'ramda'

/**
 * Determines if a string starts with another string.
 *
 * @since v1.0.0
 * @param {startSTring} (String) The starting string.
 * @param {fullString} (String) The string to test.
 * @return {Bool} True if the fullString starts with the first parameter; false otherwise.
 * @example
 * @deprecated Please use .startsWith() from ramda.
 * RS.startsWith('h', 'hello') //=> true
 */
const startsWith = curry(
  (startString, fullString) => {
    return newStartsWith(startString, fullString)
  }
)

export default startsWith
