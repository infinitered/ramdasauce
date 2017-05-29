import { isNil, isEmpty } from 'ramda'
import random from './random'

/**
 * Given a array, grabs 1 random item out.
 *
 * @since v1.0.0
 * @return {*} A random item in the list.
 * @example
 * RS.sample([8,6,7,5,3,0,9]) //=> Maybe 6?  Maybe 9?  Feel lucky?
 */
const sample = (list) => {
  if (isNil(list) || isEmpty(list)) {
    return null
  }
  const min = 0
  const max = list.length - 1
  return list[random(min, max)]
}

export default sample
