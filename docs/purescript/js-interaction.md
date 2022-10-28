---
title: Interacting with JS in PureScript
---

# JavaScript-Purescript Interaction

This part resolves around using PureScript functions in JavaScript, and the other way around - using JavaScript functions in
PureScript.

## Importing foregin JS functions in PureScript

For this task, there is the so-called foreign function interface. For making a single or multiple JS functions
available in PureScript, we always need a JavaScript file, holding the functions, and a PureScript file, referencing those, making them available as PureScript imports.

Let's create a JS function for doubling a given integer. To do so, create in the src-folder of your PS app a Calculations.js:

```javascript
'use strict'
exports.double = function (n) {
	return 2 * n
}
```

Then, the Calculations.purs, to make this function available:

```haskell
module Calculations where

foreign import double :: Int -> Int
```

Finally, you can import and use the double function:

```haskell
import Calculations

double 2
-- 4
```

For making existing functions of JavaScript available, you can just mark them to be exported. Again, our Calucations.js:

```javascript
'use strict'
exports.power = Math.power
```

Importing stays the same.

## Importing PureScript functions in JavaScript

The most interesting part might be to import functions in JavaScript. In this example, we will import a PS function in Node.js.

In the Main.purs file, I stored a function "double":

```haskell
double :: Int -> Int
double n = n * 2
```

Now, when running

```bash
spago bundle-ap
```

Our PS file will be transcompiled to JavaScript, and stored in /output/Main/index.js, from where we can import functions.

NOTE: No, this is not the same as running spago bundle-app and then to import the root-level index.js, which is generated. For bundling the index.js in the root of your PS project directory, dead code is removed - this includes functions, never called from your PS main function.
Therefore, using the central index.js is for building a whole PS project. The way I just taught you is for importing single functions, written in PureScript.

## Importing uncurried functions from JavaScript

The example we had before covered a function in JavaScript (double) that has only one parameter. As you might know, all functions in PureScript only have a single-parameter, for multiple ones, we use currying, [covered here](https://github.com/LouisPetrik/cheatsheet/blob/master/purescript.md#writing-a-function-with-more-than-one-parameter).

Therefore, we can't import a JS function with more than one parameter as before - we need to prepare PureScript for it.

Let's rewrite our Calculation package this way:

```javascript
exports.addNums = function (a, b) {
	return a + b
}
```

Now, before writing the PS code, make sure to import the package for the wrapper we need:

```bash
spago install purescript-functions
```

Calculations.purs:

```haskell
module Calculations where

import Data.Function.Uncurried

foreign import addNums :: Fn2 Int Int Int
```

Fn2 is the function that enables us to use an uncurried function with two parameters.

Now, we can use addNums in the REPL or code like this:

```haskell
import Calculations
import Data.Function.Uncurried (runFn2)

runFn2 addNums 2 2
-- 4
```

Reminder: When having X parameters in an uncurried JS function, make sure to use runFn and FnX.
For example, runFn3, runFn4 up to runFn10 are all available in the package.
