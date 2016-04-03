# Ramdasauce

Adds a few utilities on the delicious [Ramda.js](http://ramdajs.com/) library.


# Installing

`npm install ramdasauce --save`


# Getting Started

Ramdasauce is distributed as an ES5 library, but I'll show you the examples here in ES(6|2015) format.

```js
import RS from 'ramdasauce'
```

# Getting Started - The Reckless Way

An alternative way if you want to continue to use `R.` is to import Ramdasauce in the dirty way.

```js
import {R} from 'ramdasauce'
```

The polluted version merges Ramda into Ramdasauce so you can continue to use `R.newThings`.

NOTE: Although this isn't monkey-patching, it makes me feel a bit dirty like it were.  Jury is out on this one.  I'd love to hear some feedback.

# Usage

Here's the quick list of functions and a simple example.

```js
import RS from 'ramdasauce'

RS.toDate(0)                // a Number to a date Object
RS.toNumber('5')            // a String to a Number
RS.within(1, 2, 2)          // is the 3rd parameter within the range of 1st through 2nd?
RS.eqLength([1,2,3], 'abc') // tests 2 things to see if their length properties are the same
RS.log('x')                 // logs and returns the parameter
RS.trace('x', 1)            // logs the 1st param and returns the 2nd
RS.random(68, 70)           // a random number from the min to the max included
```

A few notes about log & trace.
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

# Feedback

Do you have any common `ramda` patterns?
