---
title: Arrays in PureScript 
---

# Arrays
Arrays hold a constant number of elements. These elements must be of the same type. Just like all other data in PureScript, Arrays are immutable. 
When altering elements of an array, the original data remains untouched. Yet, the entire array with the altered-version of the data is returned. 


## Generating Array in Range:

```haskell
range 0 5
-- [0,1,2,3,4,5]
```

Or:

```haskell
(0 .. 5)
```

## Concatenating Arrays

The concat function takes an Array of Arrays, and concatenates them:

```haskell
concat [[1, 2, 3], [4, 5]]
-- [1,2,3,4,5]
```

## Concat Map

Map receives a function from values to values. Concat Map takes a function from values to arrays of values.

Here is a quick example:

```haskell
map (\n -> [n, n * n]) (1 .. 5)
-- [[1,1],[2,4],[3,9],[4,16],[5,25]]
```

As you can see, the map in this case produces an array of arrays. Often, this is not what we wish for.

Through the concat map, it is turned into a single array:

```haskell
concatMap (\n -> [n, n * n]) (1 .. 5)
-- [1,1,2,4,3,9,4,16,5,25]
```