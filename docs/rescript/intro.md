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

Important to mention is that ReScript is built in an agnostic way. You can write JS code for your Node.js backend and at the same time, React code with ReScript's JSX. 


## Code examples 
Let's go over some examples of ReScript in action. Admittedly, hello world in ReScript isn't that spectacular. 
To log something, the JS-package is used, which holds bindings for pure JavaScript functions. 

### Hello world 

```rescript
Js.log("Hello world")
```
### ReScript + React

ReScript also brings its own implementation of JSX. Thus, you can write React apps while profiting from the programming language. 


## Installing ReScript 