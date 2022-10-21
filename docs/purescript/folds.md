# Folds

Make sure to import:

```haskell
import Data.Foldable
```

There are two basic folds: `foldr` which stands for "fold from the right", and `foldl` which stands for "fold from the left".

```haskell
foldl (+) 0 [1, 2, 3]
-- 6

foldr (+) 0 [1, 2, 3]
-- 6
```

No matter the direction, both fold-functions sum up the values of the array. We can provide other operations than just addition:

```haskell
foldl (*) 0 [1, 2, 3, 4]
-- 0
```

But why does multiplying all the values with each other lead to "0" as a result? Because of the "0" we provide after the operator. It can be thought of as an accumulator, accumulating a result after we traversed the array.

Let's improve that to multiply all the values with each other:

```haskell
foldl (*) 1 [1, 2, 3, 4]
-- 24
```

Or, to double the output:

```haskell
foldl (*) 2 [1, 2, 3, 4]
-- 48
```