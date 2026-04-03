---
title: Functional JavaScript
--- 


# Functional JavaScript Cheat Sheet

## Pure Functions
Pure functions are functions that always produce the same output for the same input and have no side effects. They rely only on their input parameters and return a value without modifying any external state.

```javascript
function add(a, b) {
  return a + b;
}
```

In the example above, the `add` function is pure because it consistently returns the sum of its two parameters `a` and `b`. It doesn't modify any variables outside its scope or have any other side effects.

## Higher-Order Functions
Higher-order functions are functions that can accept other functions as arguments or return functions as their results. They enable powerful functional programming techniques in JavaScript.

```javascript
function map(array, transform) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;
}
```

The `map` function above is an example of a higher-order function. It takes an array and a `transform` function as arguments. It applies the `transform` function to each element in the array and returns a new array containing the transformed values.

## Currying
Currying is the process of converting a function that takes multiple arguments into a sequence of functions, each taking a single argument. It allows partial application of arguments, resulting in the creation of new functions.

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
```

In the example above, the `multiply` function is curried. It takes an argument `a` and returns a new function that takes another argument `b` and multiplies it with `a`. This curried function can be partially applied to create new specialized functions.

## Mapping
Mapping is a functional programming technique that applies a given transformation to each element of a collection and returns a new collection with the transformed values.

```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((x) => x * x);
```

In the example above, the `map` function is used to square each element in the `numbers` array. It returns a new array `squaredNumbers` with the squared values `[1, 4, 9, 16, 25]`.

## Filter
Filtering is a functional programming technique that selects elements from a collection based on a given condition and returns a new collection with the selected elements.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((x) => x % 2 === 0);
```

In the example above, the `filter` function is used to select only the even numbers from the `numbers` array. It returns a new array `evenNumbers` with the even values `[2, 4]`.

## Reduce
Reducing is a functional programming technique that applies a given operation to a collection and accumulates the result into a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, x) => acc + x, 0);
```

In the example above, the `reduce` function is used to calculate the sum of all

 the numbers in the `numbers` array. It starts with an initial value of `0` and iteratively adds each element to the accumulator `acc`.

## Immutability
Immutability is a concept in functional programming where data structures, once created, cannot be modified. Instead, new data structures are created with the desired changes.

```javascript
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((x) => x * 2);
```

In the example above, the original `numbers` array is not modified. Instead, the `map` function creates a new array `doubledNumbers` with each element doubled. This ensures immutability and avoids unintended side effects.

I hope this cheat sheet on Functional JavaScript helps you understand the essential concepts and techniques involved. Feel free to explore the provided internal links for further learning on related topics. Happy programming!

## Immutability
Immutability is a concept in functional programming where data structures, once created, cannot be modified. Instead, new data structures are created with the desired changes. In JavaScript, primitive types such as numbers and strings are immutable by default, meaning their values cannot be changed once assigned. However, objects and arrays are mutable, allowing modifications to their properties or elements.

### Immutability with Primitive Types
When using the `const` declaration in JavaScript, primitive types are assigned as immutable values. This means you cannot reassign a new value to the same variable, but it doesn't prevent you from modifying the value itself.

```javascript
const number = 5;
number = 10; // Throws an error, as you cannot reassign a new value to `number`
```

### Immutability with Objects and Arrays
Unlike primitive types, objects and arrays in JavaScript are mutable, even when declared with `const`. While you cannot reassign a new object or array to the same variable, you can modify their properties or elements.

```javascript
const person = { name: 'John', age: 25 };
person.name = 'Jane'; // Valid, modifies the `name` property of `person`
```

To achieve immutability with objects and arrays, libraries like Immutable.js can be used. Immutable.js provides immutable data structures that efficiently manage updates by creating new copies of data instead of mutating existing data.

```javascript
import { Map } from 'immutable';

const person = Map({ name: 'John', age: 25 });
const updatedPerson = person.set('name', 'Jane');

console.log(person.get('name')); // Output: John
console.log(updatedPerson.get('name')); // Output: Jane
```

In the example above, the `Map` from Immutable.js is used to create an immutable `person` object. The `set` method returns a new `Map` object with the updated value for the specified key. The original `person` object remains unchanged, ensuring immutability.

By leveraging libraries like Immutable.js, you can embrace immutability in JavaScript and reap the benefits of predictable data structures and state management in functional programming.