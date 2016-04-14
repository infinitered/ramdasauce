import R from 'ramda'

/**
 * Takes two arrays of objects, finds their intersection on a given property, and returns the matching objects
 *
 * @since v1.0.0
 * @param {prop} (String) The property to search by
 * @param {needles} (Array) The objects to match.
 * @param {haystack} (Array) The objects to search on.
 * @return {Array} The objects from haystack that match the property of the needles.
 * @example
 * RS.findAllBy('id', [{id: 1}, {id: 2}], [{id: 1, something: 'else'}, {id: 3, something: 'else'}]) // [{id: 1, something: 'else'}]
 */
const findAllBy = (prop, needles, haystack) => {
  const needleProps = R.pluck(prop)(needles)
  const haystackProps = R.pluck(prop)(haystack)
  const intersection = R.intersection(needleProps, haystackProps)
  return R.filter((oneHaystack) => {
    return R.contains(R.prop(prop, oneHaystack), intersection)
  }, haystack)
}

export default findAllBy
