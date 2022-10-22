---
title: Typeclasses in Haskell 
---


# Typeclasses 

```haskell 
:t (+) 
---(+) :: Num a => a -> a -> a
```

When asking GHCI for the type of an operator like the plus-operator, you will notice that it is basically a function. Everything before the => sign is called the class constraint.  


## Creating a typeclass on our own: 


## Creating instances manually 

We've seen before how to derive from some classes for our custom data, so we end up being able to use their functionality. Therefore, while data can automatically become instance of a class, we can also do it manually: 

```haskell
data Options = Yes | No | Unsure

instance Eq Options where
  Yes == Yes = True
  No == No = True
  Unsure == Unsure = True
  _ == _ = False
```