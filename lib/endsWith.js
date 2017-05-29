import { curry, endsWith as newEndsWith } from 'ramda'

/**
 * Determines if a string starts with another string.
 *
 * @since v1.0.0
 * @param {endingString} (String) The ending string.
 * @param {fullString} (String) The string to test.
 * @return {Bool} True if the source ends with the first parameter; false otherwise.
 * @example
 * @deprecated Please use .endsWith() from ramda.
 * RS.endsWith('o', 'hello') //=> true
 */
const endsWith = curry(
  (endingString, fullString) => {
    return newEndsWith(endingString, fullString)
  }
)

export default endsWith
