/**
 * Generates a random number within the min and max range.
 *
 * @since v1.0.0
 * @param {min} (Number) Minimum number to include.
 * @param {max} (Number) Maximum number to include.
 * @return {Number} The random number.
 * @example
 * RS.random(1, 2) //=> sometimes 1, sometimes 2
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default random
