# Ramdasauce

Adds a few utilities based on the delicious [Ramda.js](http://ramdajs.com/) library.

* Depends on `ramda 0.20.1+`.
* Targets ES5.
* Built with ES6.


# Installing

`npm i ramdasauce --save`


# Usage

Here's the quick list of functions and a simple example.

```js
import RS from 'ramdasauce'

// --- Conversions ---
RS.toDate(0)                // a Number to a date Object
RS.toNumber('5')            // a String to a Number

// --- Predicates ---
RS.isUndefined(qwerty)      // check if something is undefined
RS.isNotNil(null)           // check if something is not null or undefined
RS.isNilOrEmpty(null)       // checks if something is null, undefined or R.isEmpty
RS.isWithin(1, 2, 2)        // is the 3rd parameter within the range of 1st through 2nd?
RS.isNotWithin(1, 2, 100)   // is the 3rd parameter not within the range of 1st through 2nd?
RS.eqLength([1,2,3], 'abc') // tests 2 things to see if their length properties are the same

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

Do you have any common `ramda` patterns?
