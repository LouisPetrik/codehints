---
title: Lists in Haskell 
---

# Lists 

## Accessing element in list through index: 
```haskell 
[1, 2, 3] !! 2 
--- 3
```

## Head, tail, last 

```haskell 
head [1, 2, 3]
--- 1

tail [1, 2, 3]
--- 2, 3

last [1, 2, 3]
--- 3
```

## null, length 

```haskell 
null [1, 2, 3]
--- False 

null []
--- True 

length [1, 2, 3]
--- 3
```

## Range 

```haskell
[1, 2..10]
---[1,2,3,4,5,6,7,8,9,10]

[0.1, 0.2..1]
-- [0.1,0.2,0.30000000000000004,0.4,0.5,0.6,0.7000000000000001,0.8,0.9,1.0]
```

This works even with chars: 

```haskell 
['A' .. 'Z']
--- "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

## elem

This function receives a value and a list and returns if the value is an element 
of the list. 

```haskell 
1 `elem`[1, 2, 3]
--- True
```

## cycle 

With cycle, we can create a list that repeats its content for ever - we receive an infitite list. For example, [1, 2] would be turned into [1, 2, 1, 2, 1, 2 ... and so on. 

To cut the list which turns the infinite list cycle creates into an ending one: 

```haskell 
take 10 (cycle[1, 2]) 
---[1,2,1,2,1,2,1,2,1,2]
```

The parameter "take" receives is the length of the list that should be generated. 

## repeat 

It does what it suggests.

While generate an infitite list consisting only of 5's: 

```haskell 
repeat 5
```

To make it a fixed size: (10 times 5): 

```haskell 
take 10 (repeat 5)
```