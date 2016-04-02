# RamdaSauce

Adds a few utilities on the delicious [Ramda.js](http://ramdajs.com/) library.


# Installing

`npm install ramda-sauce`


# Getting Started

RamdaSauce is distributed as an ES5 library, but I'll show you the examples here in ES(6|2015) format.

**normal-example.js**
```js
import RS from 'ramda-sauce'
```

# Getting Started - The Reckless Way

An alternative way if you want to continue to use `R.` is to import RamdaSauce in the dirty way.

**polluted-example.js**
```js
import {R} from 'ramda-sauce'
```

The polluted version merges Ramda into RamdaSauce so you can continue to use `R.newThings`.

NOTE: Although this isn't monkeypatching, it makes me feel a bit dirty like it were.  Jury is out on this one.  I'd love to hear some feedback.

# New Functions

Here's a list of what this library contains organized by topic.

**Conversions** - from type to type
```js
RS.toDate(0) // a Number to a date Object
RS.toNumber('5') // a String to a Number
```

**Logging** - great for injecting into `R.pipe` for debugging
```js
RS.log('x') // logs and returns the parameter
RS.trace('x', 1) // logs the 1st param and returns the 2nd
```
NOTE: Those functions aren't pure.  They have a side-effect of writing to the console.  Only use these for debugging.

**Math And Shit** - things with numbers
```js
RS.within(1, 100, 99) // is the 3rd party between (inclusive) the 1st 2?
```


# Feedback

Do you have any common `ramda` patterns?
