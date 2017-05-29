import { curry, pipe, toPairs, map, adjust, fromPairs } from 'ramda'

/**
 * Transforms the keys of an object with a function.
 *
 * @since v1.0.0
 * @param {fn} (Function) The function to apply to the keys.
 * @param {obj} (Object) The object to operate on.
 * @return {Object} A new and improved object with SUPER KEYS!!!
 * @example
 * RS.mapKeys(R.toUpper, {a: 1}) //=> {A: 1}
 */
const mapKeys = curry(
  (fn, obj) => pipe(
    toPairs,
    map(adjust(fn, 0)),
    fromPairs
  )(obj)
)

export default mapKeys
