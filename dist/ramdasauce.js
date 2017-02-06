'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var R = _interopDefault(require('ramda'));

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
 * @example
 * R.pipe(
 *  R.concat('!!')
 *  RS.log,  // <-- prints 'HI!!' to your console
 *  R.toLower
 * )('HI') //=> 'hi!!'
 */
var log = (function (x) {
  console.log(x);
  return x;
});

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
 * @since v1.0.0
 * @sig String A -> * -> *
 * @param {String} the message to display in the console
 * @param {*} the value to pass back
 * @return {*} the 2nd value gets returned
 * @example
 * R.pipe(
 *    RS.trace('here'),  // <-- print 'here' to the console
 *    R.toLower
 *  )('HI') //=> 'hi'
 */
var trace = R.curry(function (message, x) {
  console.log(message);
  return x;
});

/**
 * Converts the parameter to a number.
 *
 * Number, null, and undefined will return themselves,
 * but everything else will be convert to a Number, or
 * die trying.
 *
 * @since v1.0.0
 * @param {String} the String to convert
 * @return {Number} the Number version
 * @example
 * RS.toNumber('7') //=> 7
 */
var toNumber = R.cond([[R.isNil, R.identity], [R.is(Number), R.identity], [R.T, function (x) {
  return Number(x);
}]]);

/**
 * Converts the parameter to a Date object.
 *
 * @since v1.0.0
 * @param {Number} number - The number to convert
 * @return {Object} The Date object
 * @example
 * RS.toDate(0) //=> The 0 as a Date object
 */
// converts something to a Date
var toDate = function toDate(number) {
  return R.cond([[R.isNil, R.identity], [R.is(Object), R.identity], [R.T, function (x) {
    return new Date(x);
  }]])(number);
};

/**
 * Given a min and max, determines if the value is included
 * in the range.
 *
 * This function is curried.
 *
 * @since v1.0.0
 * @sig Number a -> a -> a -> a
 * @param {Number} the minimum number
 * @param {Number} the maximum number
 * @param {Number} the value to test
 * @return {Boolean} is the value in the range?
 * @example
 * RS.isWithin(1, 5, 3) //=> true
 * RS.isWithin(1, 5, 1) //=> true
 * RS.isWithin(1, 5, 5) //=> true
 * RS.isWithin(1, 5, 5.1) //=> false
 */
var isWithin = R.curry(function (min, max, value) {
  var isNumber = R.is(Number);
  return isNumber(min) && isNumber(max) && isNumber(value) && R.gte(value, min) && R.gte(max, value);
});

/**
 * Given a min and max, determines if the value is not
 * included in the range.
 *
 * This function is curried.
 *
 * @since v1.0.0
 * @sig Number a -> a -> a -> a
 * @param {Number} the minimum number
 * @param {Number} the maximum number
 * @param {Number} the value to test
 * @return {Boolean} True if the value is not included; otherwise false.
 * @example
 * RS.isNotWithin(1, 5, 3) //=> false
 * RS.isNotWithin(1, 5, 1) //=> false
 * RS.isNotWithin(1, 5, 5) //=> false
 * RS.isNotWithin(1, 5, 5.1) //=> true
 */
// export default R.curry((min, max, value) => R.complement(isWithin(min, max, value)))
var isNotWithin = R.complement(isWithin);

/**
 * Compares two objects to see if their length
 * properties are the same.
 *
 * @since v1.0.0
 * @param {x} (String|Array|Object) The first thing to compare.
 * @param {y} (String|Array|Object) The 2nd thing to compare.
 * @return {Bool} Wether the objects have the same length.
 * @example
 * RS.eqLength([], []) //=> true
 * RS.eqLength({length: 2}, 'ab') //=> true
 */
var eqLength = R.eqProps('length');

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
var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Given a array, grabs 1 random item out.
 *
 * @since v1.0.0
 * @return {*} A random item in the list.
 * @example
 * RS.sample([8,6,7,5,3,0,9]) //=> Maybe 6?  Maybe 9?  Feel lucky?
 */
var sample = function sample(list) {
  if (R.isNil(list) || R.isEmpty(list)) {
    return null;
  }
  var min = 0;
  var max = list.length - 1;
  return list[random(min, max)];
};

/**
 * Checks if something is null, undefined or R.isEmpty
 *
 * @since v1.0.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is null or empty; false otherwise.
 * @example
 * RS.isNilOrEmpty() //=> true
 */
var isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);

/**
 * Checks if something is not null or undefined.
 *
 * @since v1.0.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is not nil; false otherwise.
 * @example
 * RS.isNotNil(null) //=> false
 */
var isNotNil = R.complement(R.isNil);

/**
 * Checks if something is undefined.
 *
 * @since v1.0.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is undefined; false otherwise.
 * @example
 * RS.isUndefined(asdf) //=> false
 */
var isUndefined = function isUndefined(x) {
  return typeof x === 'undefined';
};

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
var mapKeys = R.curry(function (fn, obj) {
  return R.pipe(R.toPairs, R.map(R.adjust(fn, 0)), R.fromPairs)(obj);
});

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
var rangeStep = R.curry(function (step, start, stop) {
  if (step === 0) return null;
  if (step > 0 && stop < start) return null;
  if (step < 0 && stop > start) return null;
  return R.map(function (n) {
    return start + step * n;
  }, R.range(0, 1 + (stop - start) / step >>> 0));
});

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
var dotPath = R.curry(function (stringPath, obj) {
  var path = R.split('.', stringPath);
  return R.path(path, obj);
});

/**
 * Determines if a string starts with another string.
 *
 * @since v1.0.0
 * @param {startWith} (String) The starting string.
 * @param {source} (String) The string to test.
 * @return {Bool} True if the source starts with the first parameter; false otherwise.
 * @example
 * RS.startsWith('h', 'hello') //=> true
 */
var startsWith = R.curry(function (subString, fullString) {
  return R.equals(subString, R.take(R.length(subString), fullString));
});

/**
 * Determines if a string ends with another string.
 *
 * @since v1.0.0
 * @param {endsWith} (String) The ending string.
 * @param {source} (String) The string to test.
 * @return {Bool} True if the source ends with the first parameter; false otherwise.
 * @example
 * RS.endsWith('o', 'hello') //=> true
 */
var endsWith = R.curry(function (subString, fullString) {
  return R.equals(subString, R.takeLast(R.length(subString), fullString));
});

/**
 * Finds an object in an array by the given property and value.
 *
 * @since v1.0.1
 * @param {prop} (String) The prop to search by.
 * @param {value} (String) The string to search for.
 * @param {source} (Array) The array to search in.
 * @return {Object} The object that matches the search or null if not found.
 * @example
 * RS.findByProp('id', 'a', [{id: 'a', id: 'b'}]) //=> {id: 'a'}
 */
var findByProp = R.curry(function (prop, value, source) {
  return R.find(R.propEq(prop, value))(source);
});

/**
 * Finds the index of an object in an array by the given property and value.
 *
 * @since v1.0.1
 * @param {prop} (String) The prop to search by.
 * @param {value} (String) The string to search for.
 * @param {source} (Array) The array to search in.
 * @return {Integer} The index of the object that matches the search or -1 if not found.
 * @example
 * RS.findIndexByProp('id', 'a', [{id: 'a', id: 'b'}]) //=> 0
 */
var findIndexByProp = R.curry(function (prop, value, source) {
  return R.findIndex(R.propEq(prop, value))(source);
});

var Ramdasauce = {
  log: log,
  trace: trace,
  toNumber: toNumber,
  toDate: toDate,
  isWithin: isWithin,
  isNotWithin: isNotWithin,
  eqLength: eqLength,
  random: random,
  sample: sample,
  isNilOrEmpty: isNilOrEmpty,
  isNotNil: isNotNil,
  isUndefined: isUndefined,
  mapKeys: mapKeys,
  rangeStep: rangeStep,
  dotPath: dotPath,
  startsWith: startsWith,
  endsWith: endsWith,
  findByProp: findByProp,
  findIndexByProp: findIndexByProp
};

module.exports = Ramdasauce;

// DANGER ---
// but, provide a polluted version of ramda for convenience
// export const R = Ramda.merge(Ramdasauce, Ramda)

module.exports = Ramdasauce;
