# Typeclasses 

No, typeclasses are not related to classes in object oriented programming. Rather, typeclasses can be imagined as interfaces in functional programming. Typeclasses serve to overload functions for different data types, for example. First, we define the class itself and the signature of the functions it holds. Then, we can create as many instances as we like to - these instances are usually created for different data types. Nevertheless, all instances must define the functions which are declared in the related typeclass. Let's look at an example. 

As you might know, we can represent boolean values as integers. true is 1, and false is 0. Let's create a typeclass that gives us a method (functions in typeclasses are called methods) that returns the related integer of the boolean, or returns the integer we passed. So, our method should be able to work with integers but also with booleans. 

```haskell 
class ToInt n where 
  toNum :: n -> Int 

instance intToInt :: ToInt Int where 
  toNum n = n 

instance booleanToInt :: ToInt Boolean where
  toNum true = 1 
  toNum false = 0 
```

Calling the method of our typeclass: 

```haskell 
toNum 10 
--- 10

toNum true 
--- 1
```