import R from 'ramda'

/**
 * Fishes out a deep property from an object by
 * a string path.
 *
 * @since v1.0.0
 * @param {stringPath} (String) A path with dots in them.
 * @param {y} (Object) The 2nd thing to compare.
 * @return {*} The value found at the path; otherwise undefined
 * @example
 * const obj = {a: {b: {c: [1,2,3]}}}
 * RS.dotPath('a.b.c.1', obj) //=> 2
 */
const dotPath = R.curry((stringPath, obj) => {
  const path = R.split('.', stringPath)
  return R.path(path, obj)
})

export default dotPath
