---
title: Functions in Haskell
---

# Functions

Chapter will be more complete soon. For now, check out the [Functions cheatsheet of PureScript](https://github.com/LouisPetrik/cheatsheet/blob/master/purescript.md#functions-1) as functions work the same way in Haskell.

## Function composition

The art of letting functions work together, so for example f1(f2(x)) is called function composition.
There are two important signs you should know in Haskell.

In fact, composing functions like f1(f2(f3(x))) isn't a technical problem - yet is not that pretty.
In Haskell, the $ and . notation offer some syntactial sugar.

## $ (Dollar sign notation)

```haskell
double :: Int -> Int
double x = x * 2

triple :: Int -> Int
triple x = x * 3

-- possible:
double (triple 2)

-- cleaner:
double $ triple 2
```

As you can see, the $ notation saves us the parentheses, and even provides for the closing one. Instead of having nested parentheses, your code might look more like this:

```haskell
f1 $ f2 $ f3 $ f4 69
```

## . (Dot notation)

The . operator helps us to tie the result of a function on the right side, to the input on the left side.

Back to our example:

```haskell
-- before:
double $ triple 2

-- now:
(double . triple) 2
```

To divide our almost final result by two:

```haskell
(divideByTwo . double . triple) 2
```

I guess you now have a good feeling for both operators.

## Working with typeclasses as function parameters.

Usually, we strictly define the types of values our function should take and return in the function declaration:

```haskell
add :: Int -> Int -> Int
add x y = x + y
```

Yet, sometimes we want to use a broader spectrum of types that might be applied to our function. Coming back to the add-function, we must keep in mind that not just integer-values can be added. To make our function more general, we can instead of mentioning single types, use the whole class:

```haskell
add2 :: Num x => x -> x -> x
add2 x y = x + y
```

Now we can even execute "add 2 2.5" successfully.
