# Ramdasauce

Adds a few utilities based on the delicious [Ramda](http://ramdajs.com/) library.

[![npm module](https://badge.fury.io/js/ramdasauce.svg)](https://www.npmjs.org/package/ramdasauce)


# Installing

`npm i ramdasauce --save`

* Depends on `ramda 0.20.1+`.
* Targets ES5.
* Built with ES6.

# Usage

Here's the quick list of functions and a simple example.

```js
import RS from 'ramdasauce'

// --- Conversions ---
RS.toDate(1e12)             // a Number to a date Object
RS.toNumber('5')            // a String to a Number

// --- Object Shenanigans ---
const x = {a: 1, b: 2, c: {x: [5, 6]}}
RS.mapKeys(R.toUpper, x)    // transforms the keys of an object by the function
RS.dotPath('c.x.0')         // fetches a value from a nested object by a string path

// --- Generating Things ---
RS.rangeStep(2, 2, 10)      // generates a range of numbers with a step

// --- Predicates ---
RS.isUndefined(qwerty)      // check if something is undefined
RS.isNotNil(null)           // check if something is not null or undefined
RS.isNilOrEmpty(null)       // checks if something is null, undefined or R.isEmpty
RS.isWithin(1, 2, 2)        // is the 3rd parameter within the range of 1st through 2nd?
RS.isNotWithin(1, 2, 100)   // is the 3rd parameter not within the range of 1st through 2nd?
RS.eqLength([1,2,3], 'abc') // tests 2 things to see if their length properties are the same
RS.startsWith('h', 'hi')    // does a string start with another string?
RS.endsWith('i', 'hi')      // does a string end with another string?

// --- Impure Randomness ---
RS.random(68, 70)           // a random number from the min to the max included
RS.sample(['red', 'blue'])  // picks a random item from a list

// --- Impure Debugging Tools ---
RS.log('x')                 // logs and returns the parameter
RS.trace('x', 1)            // logs the 1st param and returns the 2nd
```


# Tips For Debugging
```js
import R from 'ramda'
import RS from 'ramdasauce'

// NOTE: impure because they write to the console... but
// check this out:
R.pipe(
  R.concat('!!')
  RS.log,  // <-- prints 'HI!!' to your console
  R.toLower
)('HI') //=> 'hi!!'

R.pipe(
  RS.trace('here'),  // <-- print 'here' to the console
  R.toLower
)('HI') //=> 'hi'
```


# Prior Art

Most of these functions were lifted from stuff I wrote in real projects.

(*leans in and whispers*)

I did look at these tho:

* https://github.com/Cottin/ramda-extras
* https://github.com/mediasuitenz/ramda-extended
* https://github.com/ramda/ramda/wiki/Cookbook
* https://github.com/seancannon/prettycats


# Philosophy

These helper functions target that sweet spot between:

> Not right for `ramda` core.

and

> Would never be used outside your app.

Functions being added here *must* be used in an app.  Preferable more than once.

I hope this library won't turn into something like this:

```js
RS.portmanteau('functor', 'wrecked')
RS.yearsForAnimalInAsianCalendars('monkey')
```


# Feedback

Do you have any common `ramda` patterns you use frequently?  Drop some issues or PRs in!


# Release Notes

### 1.0.0 - April 3rd, 2016
* Initial Release
