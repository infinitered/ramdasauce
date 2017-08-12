/**
 * Prints the parameter to console.log.
 *
 * Useful when placed inside pipe or compose to inspect
 * the value as it passes on through.
 *
 * @since v1.0.0
 * @sig * -> *
 * @param {*} the value to log
 * @return {*} the same value passed in
 * @deprecated This function will be dropped from the library in v3.
 * @example
 * R.pipe(
 *  R.concat('!!')
 *  RS.log,  // <-- prints 'HI!!' to your console
 *  R.toLower
 * )('HI') //=> 'hi!!'
 */
export default (x) => {
  console.log(x)
  return x
}
