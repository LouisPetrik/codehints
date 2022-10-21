# Conditionals

There are a couple ways to execute code conditionally in PureScript: If-then-else, case expressions, pattern matching (there is a whole section below on this topic) and guards. 
Let's start with the classic one, the if-else-then syntax in PureScript

## if-then-else

```haskell
biggerThan10 :: Int -> String
biggerThan10 num =
  if num > 10
  then "Number is > 10"
  else "Number is NOT > 10"


main = log (biggerThan10(2))
```

The output: "Number is NOT > 10".

You can also pass a condition itself as a parameter, using the type Boolean:

```haskell
test :: Boolean -> String
test condition =
  if condition
  then "true"
  else "false"

main = log (test(1 > 2))
```

The output: "false"

## Case expressions 

Using the case-of keyword, we can have something similar like a switch-case syntax: 

```haskell 
printNumber :: Int -> String 
printNumber n = case n of 
  0 -> "zero"
  1 -> "one"
  2 -> "two"
  _ -> "another number"

printNumber 2 
--- "two"
```

The underscore catches all other cases for n, which is required. 

## Pattern matching 
Depending on your knowledge of other languages, you might view this concept as PureScript's style of function-overloading. 
Through repeating our function definition without mentioning our parameter-variable, we do pattern matching. Instead of writing the 
variable, we instead provide the exact function definition for the exact given parameter. Here is our printNumber function again: 

```haskell 
printNumber :: Int -> String 
printNumber 0 = "zero"
printNumber 1 = "one"
printNumber 2 = "two"
printNumber n = "another number"
```

Make sure to cover every other case again. 

## Guards 
Last but not least, Guards can help us to realize the same function as with the ways I showed you before. 
Regarding the syntax, there are two important things: 
1. There is no equal-sign in the beginning. 
2. After the | (OR-sign) a condition must follow. That's why we always write 1 == n, etc. in the following code example. 

```haskell
printNumber :: Int -> String 
printNumber n 
  | 0 == n = "zero"
  | 1 == n = "one"
  | 2 == n = "two"
  | otherwise = "another number"
```

Guards can be combined with case-expressions. 