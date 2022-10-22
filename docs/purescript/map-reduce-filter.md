---
title: Map, Reduce and Filter in PureScript 
----

# Map, Reduce and Filter

## Map

Map transforms a structure based on a pattern, which can be applied to each element.
The following code doubles all the number in the passed array:

```haskell
map (\n -> n + 1) [1, 2, 3]
```

Returns "[2, 4, 6]"

We can also use a function to be passed into the Map, applied to each element:

```haskell
addOne :: Int -> Int
addOne x = x + 1

newArr = map addOne [1, 2, 3]
```

The same works for predefined functions:

```haskell
map show [1, 2, 3]
-- ["1","2","3"]
```

## Filter

A filter can be applied to a structure, to only copy the values matching a certain pattern.

The following filter filters an array for all even numbers:

```haskell
filter (\n -> mod n 2 == 0) [1, 2, 3, 4, 5, 6]
-- [2, 4, 6]
```