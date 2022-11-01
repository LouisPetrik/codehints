---
title: Introduction to Haskell
sidebar_position: 1
slug: /category/haskell
---

# Introduction to Haskell

Haskell is a purely functional programming language created in 1990.
The language offers C-like performance, but as it is purely functional, also a completely different experience to work with.
The fact that variables are constant in Haskell, therefore immutable, is often striking to new developers. One might wonder if a programming language with completely immutable data structures can be turing complete. The answer is yes, Haskell is turing complete.

Apart from the lack of mutable data, there is something else missing compared to other programming languages: Loops.
There are now while, for or for-each loops in Haskell. Iterations are done only with function recursion.

Since then, it is loved by mathematicians mainly, and used for projects like the Cardano blockchain.

## Hello world in Haskell

For your first program in Haskell, create a file called <code>main.hs</code>.
Paste the following code into it:

```haskell
main :: IO ()
main = putStrLn "Hello, World!"
```

You can run it with the Glasgow Haskell Compiler (GHC), which can be installed [here](https://www.haskell.org/ghc/).
Once installed, go and run: <code>ghc main.hs</code> for compiling it.
To execute your compiled program, run <code>./main</code>

There you go! You created a Hello world program in Haskell.

## Understanding immutability

The concept immutability means data being constant.
With constant, I mean that the data can't be altered at any point.
Therefore, the only type of variables you can declare are constants.

But how do typical functions like for cutting a string or array work then? While these functions are not alterting the data, they
are returning the data structure in an altered version - yet, the original data is not altered.
You might know this concept from other programming languages already. Here is an example.

```javascript
const numbers = [1, 2, 3]
numbers.slice(0, 2) // 1, 2

console.log(numbers) // 1, 2, 3
```

While numbers.slice() returns the altered contents of the array, <code>numbers</code> itself is untouched.

## Pure functions

A function is considered pure when it does not cause any side effects and returns data based only on the inputs of the function.
A side effect can be accessing the file system, the terminal or mutating any state of the application.
A practical example for pure functions are almost all functions we know from mathematics.
For example, <code>f(x) = x\*x</code> is pure - so are all functions in haskell.

## Author's Notes

Haskell is tough to learn yet worth it.
It is not a too valid choice for production application in most cases, but learning a purely functional language like it will teach you to think differently.

## Sources

Mainly, the book "Learn You a Haskell for Great Good!" is used as the source.

## Additional Ressources

-  [Learn You a Haskell for Great Good!](http://learnyouahaskell.com/chapters)
