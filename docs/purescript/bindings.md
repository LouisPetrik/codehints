---
title: Bindings in PureScript 
----

# Bindings 

Many ask, whether it's in the style of functional programming to declare and mutate variables within the scope of a function. If you have a couple hours left, go ahead and Google the discussion yourself. Meanwhile, in PureScript we can assign constants within the scope of a function. This can be done with bindings. 

## where 

Using the where-keyword we declare a constant on top of our function which is later initialized. Finally, this constant will be returned from the function. Here is a small example: 

```haskell 
addNums :: Int -> Int -> Int 
addNums x y = sum 
  where 
    sum = x + y
```
As this is not a practical usecase for where, you may want to declare your constant as a complex type like a list or a tuple, and then return it: 

```haskell
sumAndProduct :: Int -> Int -> Tuple Int Int 
sumAndProduct x y = Tuple sum product 
  where 
    sum = x + y 
    product = x * y 
```
This function returns a tuple, filled with both the product and the sum of the given integers. 

## let 

The let-keyword enables us to do the same thing as through using where. As you can see, the function signature stays the same. 

```haskell 
sumAndProduct :: Int -> Int -> Tuple Int Int 
sumAndProduct x y = 
  let sum = x + y
      product = x * y in 
  Tuple sum product 
```