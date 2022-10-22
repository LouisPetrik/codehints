---
title: Input and Output in PureScript 
----

# IO 

To log something in the console, make sure to import the proper package.
Then, in the main function, we can log like this:

```haskell
import Effect (Effect)

main = log "Hello world"
```

## Logging more than one thing

To run more than one thing in the main function, we need to use the do-keyword an proper indentation:

```haskell
main = do
  log "Hello world"
  log "Hello World"
```

## Logging an expression

In case of a variable:

```haskell
name = "John Doe"

main = log (show name)
```

In case of a function-call:

```haskell
double :: Int -> Int
double x = x * 2

main = log (show (double 2))
```

This will get "4" logged. Surprise!
Please notice the additional braces around the function-call.
Optionally, store the function call in a variable before logging.

## Concatinating stuff in the console

In this example, we have a function for doubling an integer. The second function
calls the first one, but converts and returns the first ones value to a string.
Plus, it concatinates it with another string:

```haskell
doubleNumber :: Int -> Int
doubleNumber x = x * 2

printDoubleNumber :: Int -> String
printDoubleNumber x = "The Result: " <> (show (doubleNumber x))

main = log (printDoubleNumber 2)
```

In the console:
"The Result: 4"