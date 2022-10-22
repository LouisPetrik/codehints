---
title: Bindings in Haskell 
---

# Bindings 

Bindings can be seen as a replacement for constants in the scope of functions. They don't enable us to do something completely new, but help to make things more clearly, as we can store the result of some expression through a binding. 

## let binding 

```haskell
abstractCalculation :: Int -> Int -> Int
abstractCalculation x y =
  let sum = x + y
      product = x * y
   in sum + product
```
The function above adds the sum of x & y to their product - nothing special. As you can see, with the let-block we can define constants (sum and product) and close the function with the "in" keyword, which kind of serves as return-statement. Hint: You are not forced to use the defined constants within the in-line. 


## where binding 

Using the where keyword we can declare a constant on top of our function which is later initialized. Finally, this constant will be returned from the function. 

```haskell
addNums :: Int -> Int -> Int
addNums x y = sum
  where
    sum = x + y
```

Yet, this is not a practical usecase for where. More common is to declare your constant as a complex type like a list or a tuple, and then return it. 

```haskell
sumAndProduct :: Int -> Int -> (Int, Int)
sumAndProduct x y = (sum, product)
  where
    sum = x + y
    product = x * y
```