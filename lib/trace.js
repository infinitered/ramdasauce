import R from 'ramda'

/**
 * Prints a message to console.log but returns the value
 * given to it.
 *
 * Useful when placed inside pipe or compose to show
 * a trace message like "OMG I AM HERE" but you don't
 * care about the value flowing through.
 *
 * This function is curried.
 *
 * @since v0.1.0
 * @sig String A -> * -> *
 * @param {String} the message to display in the console
 * @param {*} the value to pass back
 * @return {*} the 2nd value gets returned
 * @example
 *
 *      R.pipe(RS.trace('here'), R.toLower)('HI') //=> 'hi'
 */
export default R.curry(
  (message, x) => {
    console.log(message)
    return x
  }
)
