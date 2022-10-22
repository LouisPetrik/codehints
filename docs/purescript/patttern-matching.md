---
title: Pattern Matching in PureScript 
----

# Pattern matching 

Before, we just covered a little bit of pattern matching in functions - let's go into more detail, and learn about pattern matching for different data types. 

## Array pattern matching 
One of the benefits lists have compared to arrays is their pattern matching. With arrays, we have the problem that we can only pattern matchem them against arrays with fixed length. Let's look at an example. 

```haskell 
arraySum :: Array Int -> Int 
arraySum [x, y] = x + y
arraySum [x] = x 
arraySum _ = 0 
```
As you can see, the defined size of the arrays is fixed as we provide the exact structure. We can pass [], [x], or [x, y] 
to the function, but not an array with 3 or more fields. 
Thankfully, lists offer more flexibility when it comes to cases like this

## List pattern matching 

Disclaimer: x is used for the head of a list, and xs for the tail of it. 
Therefore, the default "head" function could look like this: 

```haskell 
listHead :: forall a. List a -> Maybe a 
listHead Nil = Nothing
listHead (x : _) = Just x 
```
As x and xs represent head and tail, we can pattern-match like this no matter the size of the list. 

## Record pattern matching 

Records are like objects in JavaScript or dictionaries in Python - I covered them in more detail [here](https://github.com/LouisPetrik/cheatsheet/blob/master/purescript.md#records-1). 

Let's create a record type called Bankaccount, that holds some basic information: 

```haskell 
type Bankaccount = 
  { 
    owner :: String, 
    balance :: Int
  }
```

Now, let's create a function that doubles the balance for whatever reason: 

```haskell
doubleBalance :: Bankaccount -> Int 
doubleBalance { balance } = 2 * balance 
```
As you can see, we can pattern-match with an exact type of field in the record type. 