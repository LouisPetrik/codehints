# Types

## Default Types 

Coming soon. 


## Sum and Product Types

Let's try to explain what these mean.

The easiest sum type to grasp in PureScript is the boolean type.
It can be "true" or "false", must be one, and can not be both. Written in a more formal
way: true | false. Sum types are types to which we can add more possible representations, divided through "|", so a logical OR.

Product types are data types, defined through more than just one constructor - tuples, for example.

## Tuples, Sets and other types

Creating a tuple:

```haskell
import Data.Tuple

someTuple = Tuple 2 4
```

Getting the first value with "fst" and the second with "scd":

```haskell

fst someTuple
-- 2

snd someTuple
-- 4
```