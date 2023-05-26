---
title: Introduction to TypeScript
sidebar_position: 1
slug: /category/typescript
---


##  What is TypeScript? 

Let's dive in, shall we? TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, adding optional static typing to the language. Static typing you ask? Yes, TypeScript brings a type-checking feature to JavaScript, making developers' lives a bit easier. This means fewer bugs and better code quality in the long run. To sweeten the deal, TypeScript supports the latest JavaScript features as well.

###  History of TypeScript 

Believe it or not, TypeScript has been around for a while now. TypeScript was first made public in October 2012 after two years of internal development at Microsoft. Since then, it has rapidly grown in popularity and is now a vital part of many web development tool chains.

##  TypeScript Code Examples 

Now, let's get our hands dirty and dive into some code examples. 

###  Basic Syntax 

The basic syntax of TypeScript is very similar to JavaScript. Let's explore some fundamental aspects.

####  Variables in TypeScript 

To declare a variable in TypeScript, we use the `let` or `const` keyword. For example:

```typescript
let name: string = "John";
const age: number = 30;
```
####  Functions in TypeScript 

Functions are also defined similarly to JavaScript, but with types for the parameters and the return value.

```typescript
function greet(name: string): string {
    return `Hello, ${name}`;
}
```

##  Types in TypeScript 

One of the main features that makes TypeScript stand out from JavaScript is its type system.

###  Basic Types 

Here are some of the fundamental types in TypeScript:

####  Number and String 

Just like JavaScript, TypeScript supports number and string data types. Here's an example of how you can declare these types.

```typescript
let count: number = 10;
let message: string = "Hello TypeScript";
```

####  Boolean and Undefined 

Other basic types include boolean and undefined. Here is how they are declared:

```typescript
let isDone: boolean = false;
let notDefined: undefined;
```

##  Where TypeScript Can Be Used 

Now that we have a basic understanding of TypeScript, let's talk about where it can be used.

###  In Web Development 

TypeScript is very popular in web development, especially when using frameworks like [React](/category/typescript-react). Its type safety feature is particularly useful in large codebases where multiple developers are working simultaneously.

###  In Server-Side Programming 

Server-side programming can also benefit from TypeScript. It can be used with Node.js to build robust back-end applications with type safety.

##  Safety in TypeScript 

One of TypeScript's

 prime features is its emphasis on safety.

###  Static Type Checking 

Through static type checking, TypeScript allows developers to catch errors during coding, rather than during runtime. This makes debugging faster and less frustrating, leading to cleaner and more reliable code.

##  Introduction to AssemblyScript 

Finally, we arrive at AssemblyScript. 

AssemblyScript is a variant of TypeScript that compiles to WebAssembly. It's essentially a subset of TypeScript, which means you can write WebAssembly in a language that's very close to JavaScript. This makes it an excellent choice for those wanting to leverage the power of WebAssembly but still remain within a familiar language environment. You can learn more about the data types used in AssemblyScript [here](/assemblyscript/data-types).

###  Link between TypeScript and AssemblyScript 

Both TypeScript and AssemblyScript share the same syntax and a few similar functionalities, making it easier for developers to transition between the two. However, it's important to note that AssemblyScript is more limited in its capabilities due to the constraints of the WebAssembly binary format.


## Additional Ressources

-  [Official Documentation](https://www.typescriptlang.org/docs/)
-  [TypeScript in React](https://www.typescriptlang.org/docs/handbook/react.html)



## Conclusion 

In conclusion, TypeScript is a powerful tool that brings static typing to JavaScript, offering better safety and tooling for large-scale applications. It has a wide range of applications, from client-side to server-side programming, and even extends into compiling to WebAssembly through AssemblyScript.

### Author's notes

Learning TypeScript is absolutely worth it.
Yet, many developers fall into the trap of using TypeScript to spam their code with type definitions. While bringing in
types is the idea behind TypeScript, it is capable of much more than this.

For getting started with TS, write JavaScript code at first, and bring in TS-exclusive stuff when you feel comfortable with it and understand, what
you are actually trying. As TS is just a superset of JavaScript, pure JS code runs perfectly in TypeScript.



## FAQs

1. **What is TypeScript?**

   TypeScript is a statically typed superset of JavaScript, developed by Microsoft.

2. **What is AssemblyScript?**

   AssemblyScript is a variant of TypeScript that compiles to WebAssembly.

3. **How is TypeScript different from JavaScript?**

   TypeScript is a superset of JavaScript, adding static typing and type-checking to JavaScript.

4. **Where can TypeScript be used?**

   TypeScript can be used in both client-side (web development) and server-side programming.

5. **What are the benefits of using TypeScript?**

   TypeScript offers type safety, leading to fewer bugs, and better code quality and maintainability.

