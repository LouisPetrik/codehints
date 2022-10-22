---
title: Custom Types in PureScript 
----

# Custom Types 

Creating data types and re-naming types is powerful. To achieve both things, PureScript offers two keywords: 
Using "Type" we can alias existing types. Using "Data" we can define custom data types. 

## type keyword 

This keyword helps to reference existing data types.

```haskell 
type MultipleChars = String 

someString :: MultipleChars 
someString = "Hello world" 
```

It is also used to create the type definition for records and other complex structures. 

## data keyword 

The data keyword is a little bit more complex. On the left-hand side, we have the actual data type. On the right-hand side of 
the equals-sign is the so-called data constructor. Custom data types must always start with an uppercase letter. 

```haskell 
data MyDataType = MyDataType 
```

Default types like Boolean can be writen with the data keyword, even though this will collapse with the existing type. 
```haskell 
data Boolean = True | False
```