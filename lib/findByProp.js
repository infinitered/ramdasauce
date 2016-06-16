import R from 'ramda'

/**
 * Finds an object in an array by the given property and value.
 *
 * @since v1.0.1
 * @param {prop} (String) The prop to search by.
 * @param {value} (String) The string to search for.
 * @param {source} (Array) The array to search in.
 * @return {Object} The object that matches the search.
 * @example
 * RS.endsWith('o', 'hello') //=> true
 */
const findByProp = R.curry(
  (prop, value, source) => R.find(R.propEq(prop, value))(source)
)

export default findByProp
