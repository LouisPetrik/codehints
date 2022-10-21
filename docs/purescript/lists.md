# Lists 

In PureScript it is important to differentiate Lists and Arrays. 
While Arrays are compiled into JavaScript Arrays when building, Lists are more like our 
typical linked-lists, and not translated to Arrays under the hood. 

```haskell
myList = 1 : 2 : 3 : Nil
myArray = [1, 2, 3]
```

```haskell 
:type myList 
--- List Int 
:type myArray 
--- Array Int 
```
When building the bundle, our Array is translated to the following JS code: 
```javascript 
var myArray = [ 1, 2, 3 ];
```

Let's go over the most important functions to work with Lists:
head, tail, cons, snoc, null, singleton, length, last & index. 


## head & tail 
Our linked list is build up like this: 
(1 (2 (3 (Nil))))
As you can see, next to the 1 is the complete rest of the list. Next to the 2 is the complete rest of the list, and so on. 
This rest is called the tail - the element "on top" is the head. 

So, the head of the tail of myList is 2. 

```haskell
head myList
```
Gives us "Just 1", and 

```haskell 
tail myList 
```
gives us "(Just (2 : 3 : Nil))". 

## cons & snoc 

Another pair of function - cons puts takes a list as the first parameter, and an element as the second parameter. 
This element is added as the head to the list. 

```haskell 
Cons 1 (2 : 3 : Nil) 
--- (1 : 2 : 3 : Nil)
```

snoc adds the provided element to the end of the list. 
```haskell 
snoc (1 : 2 : 3 : Nil) 4 
--- (1 : 2 : 3 : 4 : Nil)
```

Important: Cons is written with an uppercase "C", and the to-be-added element is the first parameter. 
For snoc, the to-be-added element is the second parameter. 

## null 

Returns true, if the provided list is empty, and false, if this is not the case. 

```haskell 
null (1 : Nil)
--- false 
```

```haskell 
null (Nil)
--- true
```

## singleton 
Returns a list with a single element in it (Nil doesn't count)

```haskell
singleton (1 : 2 : Nil) 
--- ((1 : 2 : Nil) : Nil)
```

## length 

Returns the number of elements in the list provided

```haskell 
length (1 : 2 : 3 : Nil)
--- 3
```

## last 

Returns the last element of the list

```haskell 
last (1 : 2 : 3 : Nil)  
--- (Just 3)
```

## index 
For accessing a value behind the provided index. Counting starts at 0, so index 1 is the second element: 

```haskell
index (1 : 2 : 3 : Nil) 1 
--- (Just 2)
```

## concat 

Based on a list of lists, this function concatenates the given lists: 

```haskell 
concat ((1 : 2 : Nil) : (3 : Nil) : Nil) 
--- (1 : 2 : 3 : Nil)
```