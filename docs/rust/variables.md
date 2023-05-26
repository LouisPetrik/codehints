---
title: Variables in Rust 
---

# Variables in Rust 

There are different types of variables in Rust and it is important to understand them. 
Here are the relevant keywords, related to variable declaration (without regarding data types). 

- let 
- mut 
- const 
- static 





## let

<code>let</code> is the keyword mostly used to declare variables in Rust. In many programming languages like JavaScript there are only let and const. 
While const declares constants, let declares mutable variables. This is <b>not</b> the case in Rust. Let's clearify in the next section. 

## Immutability 

By default, variables in Rust are immutable. To be mutable, they have to be declared as mutable. 


```rust
let x = 5;

x = 6;
```
This would lead to an error. 

Instead, declaring the variable as mutable allows chaning the value. 

```rust
let mut x = 5;

x = 6;
```  

## const (Constants) 

Constants are almost like normal (immutable) variables, yet there are differences. 
The "mut" keyword for making a variable mutable isn't allowed with constants. 

- Constants can be declared everywhere. Variables with <code>let</code> can't be declared globally. 
- Constants need to be declared with a data type
- Constants should be written all caps (good practise)


## Shadowing 
Shadowing could be called overwriting. When want to overwrite a variables the following would come to mind, but it doesn't work in Rust: 

```rust 
let age = 20;
age = 21;
```

Instead, we need to shadow the variable. This means, we declare a new variable with the same name. 

```rust
let age = 20;
let age = 21;
```

