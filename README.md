# RamdaSauce

Adds a few utilities on the delicious [Ramda.js](http://ramdajs.com/) library.


# Installing

`npm install ramda-sauce --save`


# Getting Started

RamdaSauce is distributed as an ES5 library, but I'll show you the examples here in ES(6|2015) format.

```js
import RS from 'ramda-sauce'
```

# Getting Started - The Reckless Way

An alternative way if you want to continue to use `R.` is to import RamdaSauce in the dirty way.

```js
import {R} from 'ramda-sauce'
```

The polluted version merges Ramda into RamdaSauce so you can continue to use `R.newThings`.

NOTE: Although this isn't monkey-patching, it makes me feel a bit dirty like it were.  Jury is out on this one.  I'd love to hear some feedback.

# New Functions

```js
import RS from 'ramda-sauce'

RS.toDate(0)                // a Number to a date Object
RS.toNumber('5')            // a String to a Number
RS.within(1, 100, 99)       // is the 3rd party between (inclusive) the 1st 2?
RS.eqLength([1,2,3], 'abc') // tests 2 things to see if their length properties are the same
```

Useful for debugging:
```js
import R from 'ramda'
import RS from 'ramda-sauce'

RS.log('x') // logs and returns the parameter
RS.trace('x', 1) // logs the 1st param and returns the 2nd

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

# Feedback

Do you have any common `ramda` patterns?
