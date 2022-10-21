# Standard Library

This section is going to cover some useful functions, available by default, like const, apply, flip and more.

## const

While in JavaScript, const is a keyword used to specifiy variables, in PureScript "const" is something different. 
The const-function returns a constant - it does this by receiving two parameters, and only returning the first one. 
You could implement it yourself like this: 

```haskell
const :: forall a b. a -> b -> a 
const x _ = x 
```
Using it: 

```haskell
filter (const true) [1, 2, 3]
--- [1, 2, 3]
```
In this example, const is used to solve a small problem. Filter takes a function as the first parameter. This function is used to determine, which values from the second parameter (an array) should be filtered out. To not filter anything at all, we pass const as it is a function and only returns the first parameter - "true". Therefore, our filter-criteria is "true", and thus, all values in the array are returned. 

In case you need const, just the other way around, there is snoc. 

## flip 

flip helps us to flip around the order of parameters, applied to a function. 

As we just learned about const, it helps us to visualize what flip actually does: 

```haskell 
log (show (const 1 2))
--- "1"
```
Since the second parameter is ignored, and only the first one is returned, the above shown code prints "1". 

Now, when applying flip to it, "2" is printed: 

```haskell
log (show (flip const 1 2))
--- "2"
```