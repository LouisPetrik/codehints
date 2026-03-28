---
title: Pattern Matching in ReScript
---


# Pattern Matching in ReScript

Pattern matching is an alternative to if-else. It is predominantly used in functional programming languages. 
In the case of ReScript, pattern matching tries to achieve even more. The official documentation states, that pattern matching
in ReScript combines destructuring, a switch and a exhaustiveness check. 

We'll have a look at some examples of pattern matching in ReScript. 

## Pattern matching destructuring 

```rescript
let sorted = (1, 2, 3)
let (lowest, _, highest) = sorted

lowest // 1
highest // 3
```

Through using the underscores, one can leave out assigning a value. 

## Pattern matching based on values 

The most common case for pattern matching is for checking values. 

```rescript
let val = 1

let result = switch val {
| 1 => "Number is one"
| 0 => "Number is zero"
| _ => "anything else"
}

Js.log(result)
```
In this code example, "Number is one" will be printed. You'll get the rest. 

## Pattern matching based on types

Pattern matching can also be used to make decision based on types. You can imagine it like overloading functions in C++ for example. 

For this example, let's set up a type which consists of three potential types - yet, only one of the three is actually assigned. 
In our variable "attribute", 
```rescript
type personAttribute =
  | Name(string)
  | Age(int)
  | NoResult

let attribute = Age(12)

switch attribute {
| Age(attr) => Js.log("Age was provided")
| Name(attr) => Js.log("Name was provided")
| NoResult => Js.log("No proper information")
}
```
"Age was provided" will be logged. 
