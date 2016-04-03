'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.R = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prints the parameter to console.log.
 *
 * Useful when placed inside pipe or compose to inspect
 * the value as it passes on through.
 *
 * @since v0.1.0
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
var log = function log(x) {
  console.log(x);
  return x;
};

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
 * R.pipe(
 *    RS.trace('here'),  // <-- print 'here' to the console
 *    R.toLower
 *  )('HI') //=> 'hi'
 */
var trace = _ramda2.default.curry(function (message, x) {
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
 * @since v0.1.0
 * @param {String} the String to convert
 * @return {Number} the Number version
 * @example
 * RS.toNumber('7') //=> 7
 */
var toNumber = _ramda2.default.cond([[_ramda2.default.isNil, _ramda2.default.identity], [_ramda2.default.is(Number), _ramda2.default.identity], [_ramda2.default.T, function (x) {
  return Number(x);
}]]);

/**
 * Converts the parameter to a Date object.
 *
 * @since v0.1.0
 * @param {Number} number - The number to convert
 * @return {Object} The Date object
 * @example
 * RS.toDate(0) //=> The 0 as a Date object
 */
// converts something to a Date
var toDate = function toDate(number) {
  return _ramda2.default.cond([[_ramda2.default.isNil, _ramda2.default.identity], [_ramda2.default.is(Object), _ramda2.default.identity], [_ramda2.default.T, function (x) {
    return new Date(x);
  }]])(number);
};

var isNumber = _ramda2.default.is(Number);

/**
 * Given a min and max, determines if the value is included
 * in the range.
 *
 * This function is curried.
 *
 * @since v0.1.0
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
var isWithin = _ramda2.default.curry(function (min, max, value) {
  return isNumber(min) && isNumber(max) && isNumber(value) && _ramda2.default.gte(value, min) && _ramda2.default.gte(max, value);
});

/**
 * Given a min and max, determines if the value is not
 * included in the range.
 *
 * This function is curried.
 *
 * @since v0.1.0
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
var isNotWithin = _ramda2.default.complement(isWithin);

/**
 * Compares two objects to see if their length
 * properties are the same.
 *
 * @since v0.1.0
 * @param {x} (String|Array|Object) The first thing to compare.
 * @param {y} (String|Array|Object) The 2nd thing to compare.
 * @return {Bool} Wether the objects have the same length.
 * @example
 * RS.eqLength([], []) //=> true
 * RS.eqLength({length: 2}, 'ab') //=> true
 */
var eqLength = _ramda2.default.eqProps('length');

/**
 * Generates a random number within the min and max range.
 *
 * @since v0.1.0
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
 * @since v0.1.0
 * @return {*} A random item in the list.
 * @example
 * RS.sample([8,6,7,5,3,0,9]) //=> Maybe 6?  Maybe 9?  Feel lucky?
 */
var sample = function sample(list) {
  if (_ramda2.default.isNil(list) || _ramda2.default.isEmpty(list)) {
    return null;
  }
  var min = 0;
  var max = list.length - 1;
  return list[random(min, max)];
};

/**
 * Checks if something is null, undefined or R.isEmpty
 *
 * @since v0.1.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is null or empty; false otherwise.
 * @example
 * RS.isNilOrEmpty() //=> true
 */
var isNilOrEmpty = _ramda2.default.anyPass([_ramda2.default.isNil, _ramda2.default.isEmpty]);

/**
 * Checks if something is not null or undefined.
 *
 * @since v0.1.0
 * @param {*} (*) The thing to check.
 * @return {Boolean} True if it is not nil; false otherwise.
 * @example
 * RS.isNotNil(null) //=> false
 */
var isNotNil = _ramda2.default.complement(_ramda2.default.isNil);

/**
 * Checks if something is undefined.
 *
 * @since v0.1.0
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
 * @since v0.1.0
 * @param {fn} (Function) The function to apply to the keys.
 * @param {obj} (Object) The object to operate on.
 * @return {Object} A new and improved object with SUPER KEYS!!!
 * @example
 * RS.mapKeys(R.toUpper, {a: 1}) //=> {A: 1}
 */
var mapKeys = _ramda2.default.curry(function (fn, obj) {
  return _ramda2.default.pipe(_ramda2.default.toPairs, _ramda2.default.map(_ramda2.default.adjust(fn, 0)), _ramda2.default.fromPairs)(obj);
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
  mapKeys: mapKeys
};

// but, provide a polluted version of ramda for convenience
var R$1 = _ramda2.default.merge(Ramdasauce, _ramda2.default);

exports.R = R$1;
exports.default = Ramdasauce;