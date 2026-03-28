---
title: Functions
--- 

<head>
<title>JavaScript Functions Cheat sheet</title>
</head>


JavaScript functions are the main building blocks in JavaScript programming. They are code snippets that are reusable, making your code more modular, maintainable, and testable.

## Introduction to Functions

In JavaScript, a function is a block of code designed to perform a specific task. A function is executed when it's invoked (called).

```javascript
function greet() {
  console.log("Hello, World!");
}

greet(); // Calls the function
```

In this example, we have defined a function named `greet` which logs "Hello, World!" to the console. We invoke this function by writing its name followed by parenthesis `()`.

## Function Syntax

A function in JavaScript is defined with the `function` keyword, followed by a name, followed by parentheses `()`. The code to be executed by the function is placed inside curly brackets `{}`.

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

In this function syntax, `name` is the function name, and `parameter1`, `parameter2`, `parameter3` are parameters. Parameters are inputs to the function. The function will perform operations on these parameters and execute the code within its body.

### Function Expressions

A JavaScript function can also be defined using an expression.

```javascript
let x = function (a, b) {return a * b};
```

Here, `x` is a function expression. It is a function without a name. The function is stored in a variable, and can be invoked (called) using the variable name.

## Arrow Functions vs. Regular Functions

Arrow functions are a more modern syntax for writing JavaScript functions. They are shorter and simpler.

```javascript
let x = (a, b) => a * b;
```

In this example, `x` is an arrow function that takes two arguments `a` and `b`, and returns the product of `a` and `b`. Arrow functions are especially useful when you want to write shorter function expressions.

## Function Parameters and Arguments

When you define a function, you can specify its parameters. Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is invoked, you pass values to the function. These values are called arguments.

```javascript
function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 3);
```

In this example, `a` and `b` are parameters and `5` and `3` are arguments. The function `multiply` takes two parameters `a` and `b`, multiplies them, and returns the result.

## Function Return

The `return` statement ends function execution and specifies a value to be returned to the function caller.

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(3, 4);
```

In this example, the `add` function returns the sum of `a` and `b`. This returned value is then stored in the variable `sum`.

## Function Invocation

Functions execute when they are invoked. In JavaScript, you invoke a function by appending `()` to its name.

```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
```

In this example, the `greet` function is invoked by appending `()` to its name. This causes the code within the function to be executed.

## Function Scope

Scope determines the accessibility (visibility) of variables. In JavaScript, each function creates its own scope.

```javascript
function myFunction() {
  let carName = "Volvo"; 
  console.log(carName);
}

myFunction(); // Outputs "Volvo"

console.log(carName); // Uncaught ReferenceError: carName is not defined
```

In this example, the `carName` variable is only visible within the `myFunction` function, and not outside of it. This is because it is defined within the function's scope.

## Function Closures

A closure is a function having access to the parent scope, even after the parent function has closed.

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
console.log(add5(2)); // Outputs 7
```

In this example, the function `makeAdder` creates a closure that encompasses its own scope as well as the scope above it.

## Function Recursion

In JavaScript, a function can call itself, and this is known as recursion.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Outputs 120
```

In this example, the `factorial` function calls itself in order to calculate the factorial of a number.

## Higher-Order Functions

In JavaScript, functions are first-class objects. This means that functions can take functions as arguments, and they can return functions. A function that does either of these things is called a higher-order function.
This concept belongs to the paradigma of <a href="/javascript/functional-javascript">functional JavaScript</a>. 

```javascript
function greet() {
  console.log("Hello, World!");
}

function callTwice(func) {
  func();
  func();
}

callTwice(greet); // Outputs "Hello, World!" twice
```

In this example, `callTwice` is a higher-order function. It accepts a function as an argument and calls that function twice.

## Immediately Invoked Function Expressions (IIFEs)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```javascript
(function () {
  console.log("Hello, World!");
})();
```

This code will declare and immediately invoke a function. The message "Hello, World!" is displayed immediately without needing to call the function separately.

## Function Context and 'this'

In JavaScript, the `this` keyword refers to the object it belongs to. In the context of a function, `this` refers to the global object when the function is invoked as a free function, not as a method of an object.

```javascript
function checkThis() {
  console.log(this);
}

checkThis(); // Outputs global object (window in a browser)
```

In this example, `checkThis` is a free function (not a method of an object), so `this` refers to the global object. When `checkThis` is invoked, it logs the global object (the `window` object in a browser environment).




<script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
` 
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is a function in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In JavaScript, a function is a block of code designed to perform a specific task. A function is executed when it's invoked (called)."
    }
  }, {
    "@type": "Question",
    "name": "How do you define a function in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A function in JavaScript is defined with the function keyword, followed by a name, followed by parentheses (). The code to be executed by the function is placed inside curly brackets {}."
    }
  }, {
    "@type": "Question",
    "name": "What is a function expression in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A JavaScript function can also be defined using an expression. It is a function without a name. The function is stored in a variable, and can be invoked (called) using the variable name."
    }
  }, {
    "@type": "Question",
    "name": "What are arrow functions in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Arrow functions are a more modern syntax for writing JavaScript functions. They are shorter and simpler. They are especially useful when you want to write shorter function expressions."
    }
  }, {
    "@type": "Question",
    "name": "What are function parameters and arguments in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When you define a function, you can specify its parameters. Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is invoked, you pass values to the function. These values are called arguments."
    }
  }, {
    "@type": "Question",
    "name": "What is the return statement in JavaScript functions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The return statement ends function execution and specifies a value to be returned to the function caller."
    }
  }, {
    "@type": "Question",
    "name": "What is function scope in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Scope determines the accessibility (visibility) of variables. In JavaScript, each function creates its own scope."
    }
  }, {
    "@type": "Question",
    "name": "What is a closure in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A closure is a function having access to the parent scope, even after the parent function has closed."
    }
  }, {
    "@type": "Question",
    "name": "What is function recursion in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In JavaScript, a function can call itself, and this is known as recursion."
    }
  }, {
    "@type": "Question",
    "name": "What are higher-order functions in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In JavaScript, functions are first-class objects. This means that functions can take functions as arguments, and they can return functions. A function that does either of these things is called a higher-order function."
    }
  }, {
    "@type": "Question",
    "name": "What is an IIFE in JavaScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined."
    }
  }, {
    "@type": "Question",
    "name": "What is the this keyword in the context of a JavaScript function?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In JavaScript, the this keyword refers to the object it belongs to. In the context of a function, this refers to the global object when the function is invoked as a free function, not as a method of an object."
    }
  }]
}

`}}></script>