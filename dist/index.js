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
 * RS.within(1, 5, 3) //=> true
 * RS.within(1, 5, 1) //=> true
 * RS.within(1, 5, 5) //=> true
 * RS.within(1, 5, 5.1) //=> false
 */
var within = _ramda2.default.curry(function (min, max, value) {
  return isNumber(min) && isNumber(max) && isNumber(value) && _ramda2.default.gte(value, min) && _ramda2.default.gte(max, value);
});

var RamdaSauce = {
  log: log,
  trace: trace,
  toNumber: toNumber,
  toDate: toDate,
  within: within
};

// but, provide a polluted version of ramda for convenience
var R$1 = _ramda2.default.merge(RamdaSauce, _ramda2.default);

exports.R = R$1;
exports.default = RamdaSauce;