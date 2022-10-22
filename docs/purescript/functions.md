---
title: Functions in PureScript 
---

# Functions

As the name of functional programming suggests it, this style of writing code resolves all around writing functions - so, let's cover what you need to know. 

## Writing a function with a return

```haskell
double a = a * 2
```

This functions receives a parameter "a" and returns it (everything behind the equals-sign).

### Providing types for the function:

```haskell
double :: Int -> Int
double a = a * 2
```

This is optional, yet, a best practise.

## Writing a function with more than one parameter:

```haskell
add :: Int -> Int -> Int
add a b = a + b
```

Since functions are curried, just add another Int -> for each parameter.
The code, under the hood looks like this:

```javascript
function add(a) {
	return function (b) {
		return a + b
	}
}
```

Confusing, hm?

## Function recursion

Recursive is a function that calls itself. This is really useful to write clean code.
The following example is a recursive function. It receives a number as starting value,
and calls the function as long the number is < 10. Of course, this is absolutely useless, because it makes out of any passed number below 10 a 10 as return.

```haskell
sumToTen :: Int -> Int
sumToTen n =
  if n == 10 then
    10
  else
    sumToTen (n + 1)

main = log (show (sumToTen 0))
```

Result will be "10".


## Higher-order functions 

A higher-order function is a function, that takes another function as a parameter / and or returns another function. This might sound weird at first, but trust me, you used higher-order functions before, and the concept is really powerful. For example, map, filter and reduce as we also have them in JavaScript or Python, are higher-order functions. 

Let's write a function, that takes another function as a parameter: 

```haskell 
doubleNum :: Int -> Int 
doubleNum n = n * 2

divideByTwo :: (Int -> Int) -> Int -> Int 
divideByTwo fun n = (fun n) / 2 
```
Our divideByTwo function takes a function with the signature (Int -> Int) as the first parameter. In this functions signature, you can see the () - they always mean we expect a function as a parameter. Then, divideByTwo takes a single Integer, and finally returns an integer. 
In the definition you can see that we take the providied function and call it "fun", then pass n to this function. 

Now, let's use the functions: 

```haskell 
divideByTwo doubleNum 4 
--- 4
```

As we undo the multiplication through dividing, the output is 4 again. 

## Impure functions

By definition, pure functions do not change anything outside of their scope. Logging something in the
console therefore is an impure function.
Of course we can log something from a function, instead of returning a value.
This is the case of an impure function:

```haskell
logSomething :: String -> Effect Unit
logSomething message = log ("My message: " <> message)


main = logSomething "Hello"
```

## The do-keyword in functions

The do keyword allows to make code in functions more readable and to work with different expressions. In the following example, "j" and "i" are both expressions, used in a final expression at the bottom which is finally returned.

```haskell
factors :: Int -> Array (Array Int)
factors n = filter (\xs -> product xs == n) do
  i <- 1 .. n
  j <- i .. n
  [ [ i, j ] ]
```