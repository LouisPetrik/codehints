---
title: The ReScript Programming Language 
slug: /category/rescript
sidebar_position: 1
--- 


# Introduction to ReScript

ReScript is a programming language, that compiles to JavaScript. The goal is to receive clean and performant JavaScript code, while working with an intuitive language. So, where is the difference to TypeScript? 
While TypeScript also is a programming language, that compiles to JavaScript, it serves as a superset to it. This means, 
TypeScript extends JS, but you can write and run vanilla JS within your TS files. 
ReScript on the other hand, is a seperat programming language. It brings other syntax, other features and other opinions with it. You will see, what I mean in a second. 


## Code examples 

### Hello world 

```rescript
Js.log("Hello world")
```
## Hello world in ReScript 


```rescript
type student = {name: string, age: int}
let student1 = {name: "John", age: 10}
let {name} = student1 // "John" assigned to `name`

// Variant
type result =
  | Success(string)
let myResult = Success("You did it!")
let Success(message) = myResult
```


## Installing ReScript 