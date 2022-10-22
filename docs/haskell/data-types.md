---
title: Data Types in Haskell 
----

# Data types 

## Int & Integer 

While "Int" is the classic integer type bound to a size, so limited in the number of numbers it can represent, "Integer" is not bound - yet, "Int" is more efficient. 

## Char & String

A char is a single character. A string is technically an array of chars, which is why strings are often noted as [Char] in Haskell. Nevertheless, we can also use "String". 

## Tuples 

Unlike lists, tuples can hold different types of data. 

We speak of pairs if a tuple has exactly two elements (no-brainer.)
Function we can use on tuple pairs are fst "first" and snd "second": 

```haskell 
fst (1, 2)
--- 1

snd (1, 2)
--- 2
```

Tuples can be returned from functions directly: 

```haskell
returnTuple :: Int -> Int -> (Int, Int)
returnTuple x y = (x, y)
```

This function just takes two values and puts them into a tuple. 

## Enums 

Enum stands for enumeration, and might be known from many other programming languages. 

Creating a custom enumeration: 

```haskell
data Numbers = One | Two | Three | Four | Five | Six
  deriving (Eq, Ord, Show, Read, Bounded, Enum)
```

Ignore the deriving-stuff for a moment. It just enables us to use a lot of functions on this type of data. When opening up the console, you can now see, that we have an ordered enumeration: 

```haskell 
One > Two 
False 

Two > One 
True

minBound :: Numbers 
One 

succ One 
Two 
```
More on the deriving-syntax [here](https://github.com/LouisPetrik/cheatsheet/blob/master/haskell.md#deriving-instances)

Types always start with an uppercase letter. 

## Type variables 

Often you will see function signatures like this one: 

```haskell 
head :: [a] -> a
```
Notice the a? While the [a] surely stands for a list, a itself can be anything when it comes to types. Therefore the head function can take a list of chars, strings, integers and return a single element of the same type. a is a type variable. 


```haskell
data Person = Person String Int

john = Person "John" 20
```

You might wonder why there is a second "Person" on the right side of the equals sign - yet, john would looks like this in JavaScript: 

```javascript
const john = new Person("John", 22);
```

"Person" in the right side of the equals sign is called the data-constructor. 

For better understanding: 

```haskell 
data Name = Lastname String | Firstname String
```

In fact, Lastname and Firstname are both available now as types - we can assign them to functions, constants etc. Once we did so, the values are also of the type "Name". 
Now, you might understand better what we mean with data constructors - Lastname and Firstname in this case. That's why in the above example of Person, Person is also used the data constructor - there is no subtype belonging to it. 

Using custom data in functions: 

```haskell
data Name = Lastname String | Firstname String

greetWithFirstname :: Name -> String
greetWithFirstname (Firstname name) = name
```
And calling the function: 

```haskell
greetWithFirstname (Firstname "Max")
"Max"
```

In the type declaration, you can see that we use Name as the first parameter - not Firstname, which the function actually wants to use. The reason is, that Firstname is a constructor - not a type. Name is the type, and in the function declaration, types are needed. 


## Using type parameters 

As we covered data constructors before, we can now move on to types parameters. 

```haskell 
data Maybe a = Nothing | Just a 
```

In this example, a is a type parameter. Maybe on the other hand, is the type constructor. 
Why Maybe is a type constructor, might be more clearly when interacting with the parameter. We can pass almost anything into a, resulting in a "Maybe String", "Maybe Char", "Maybe Person" etc. The values themselves can never just have a type of only Maybe, since Maybe is a constructor, not an actual type. 

To make it even more clear, when we pass String to Maybe, the resulting type will be Maybe String. On the other hand, Just 'Hello World' has a type of Maybe [Char]. 

Important to understand is also, that the type of "Nothing" is "Maybe a". Therefore, we can pass Nothing to each function requiring a "Maybe x" (String, Integer etc.). 

## Deriving instances 

In Haskell, we can force our data type to be derived of a certain typeclass. We will see in a second what this means. 
Here is an example. 

```haskell
data Person = Person {
  firstname: String, 
  lastname: String
} deriving (Eq)
```

Now, let's create two people of the data type "Person": 

```haskell 
maxi :: Person
maxi = Person {firstname = "Max", lastname = "Meyer"}

carl :: Person
carl = Person {firstname = "Carl", lastname = "Johnson"}
```

Thanks to deriving the Eq-class which is used for equality-checking and related stuff, we can check whether two people of type "Person" are equal: 

```haskell 
maxi == carl 
False 
```

When trying to show a Person in the console, you will initially fail - yet, it is another problem to be solved with deriving a typeclass. All we need to do is deriving the show-typeclass, too: 

```haskell
data Person = Person {
  firstname: String, 
  lastname: String
} deriving (Eq)
```
