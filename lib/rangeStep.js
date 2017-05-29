import { curry, map, range } from 'ramda'

/**
 * Generates a range of numbers.
 *
 * This function is curried.
 *
 * @since v1.0.0
 * @sig Number a -> a -> a -> [a]
 * @param {Number} (step) How much to step by.
 * @param {Number} (start) Where to start.
 * @param {Number} (stop) When to stop.
 * @return {Array} The array of numbers
 * @example
 * RS.rangeStep(2, 2, 10) //=> [2, 4, 6, 8, 10]
 */
const rangeStep = curry((step, start, stop) => {
  if (step === 0) return null
  if (step > 0 && stop < start) return null
  if (step < 0 && stop > start) return null
  return map(
    (n) => start + step * n,
    range(0, (1 + (stop - start) / step) >>> 0)
  )
})

export default rangeStep
