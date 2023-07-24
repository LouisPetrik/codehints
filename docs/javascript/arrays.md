--- 
title: JavaScript Arrays Cheat sheet 
--- 

# JavaScript Arrays Cheat sheet 

JavaScript arrays are a type of object used for storing multiple values in a single variable. Arrays are high-level, list-like objects with various built-in methods and properties that make it easy to manipulate and interact with stored data.

## Creating Arrays

When dealing with arrays in JavaScript, there are multiple ways to create them. They can be defined empty, with a fixed length, or already containing elements.

### Empty Array

An empty array is an array that has no elements. It is created by using square brackets `[]`.

```javascript
let arr = [];
```

This will create an empty array named `arr`. You can then use various methods to add elements to the array.

### Fixed-Length Array

A fixed-length array is an array where the length is set at the time of creation. This can be done using the Array constructor, `Array()`, with a single integer argument specifying the length.

```javascript
let arr = new Array(5);
```

This code creates an array `arr` of length 5. The array is empty but has a length. You can add elements to the array by index.

## Array Methods

JavaScript arrays come with a plethora of built-in methods that enable easy data manipulation. 

### Push

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let arr = [];
arr.push('element');
```

Here, the `push()` method is used to add `'element'` to the end of the empty array `arr`.

### Pop

The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

```javascript
let arr = ['element1', 'element2'];
let poppedElement = arr.pop();
```

In this example, `pop()` is called on `arr`, removing the last element `'element2'` and storing it in `poppedElement`.

### Shift

The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

```javascript
let arr = ['element1', 'element2'];
let shiftedElement = arr.shift();
```

The `shift()` method is called on `arr`, removing the first element and storing it in `shiftedElement`.

### Unshift

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let arr = ['element1'];
arr.unshift('element0');
```

The `unshift()` method is used to add `'element0'` at the start of the array.

### IndexOf

The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
let arr = ['element0', 'element1', 'element2'];
let index = arr.indexOf('element1');
```

The `indexOf()` method is used to find the index of `'element1'` in the array.

### Includes

The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```javascript
let arr = ['element0', 'element1', 'element2'];
let isIncluded = arr.includes('element1');
```

The `includes()` method is used to check if `'element1'` is included in the array.

### Find

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function.

```javascript
let arr = [5, 12, 8, 130, 44];
let found = arr.find(element => element > 10);
```

The `find()` method is used to find the first element in the array that is greater than 10.

### FindIndex

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```javascript
let arr = [5, 12, 8, 130, 44];
let index = arr.findIndex(element => element > 10);
```

The `findIndex()` method is used to find the index of the first element in the array that is greater than 10.

### Reverse

The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```javascript
let arr = ['element0', 'element1', 'element2'];
arr.reverse();
```

The `reverse()` method is used to reverse the order of the elements in the array.

### Sort

The `sort()` method sorts the elements of an array in place and returns the array.

```javascript
let arr = ['element2', 'element0', 'element1'];
arr.sort();
```

The `sort()` method is used to sort the elements in the array in lexicographic (alphabetical) order.

### Concat

The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```javascript
let arr1 = ['element0', 'element1'];
let arr2 = ['element2', 'element3'];
let arr3 = arr1.concat(arr2);
```

The `concat()` method is used to concatenate `arr1` and `arr2` into a new array `arr3`.

### Splice

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
let arr = ['element0', 'element1', 'element2'];
arr.splice(1, 0, 'newElement');
```

The `splice()` method is used to insert `'newElement'` at index 1. The parameters of `splice()` are the start index, the number of elements to remove, and the new elements to add.

## Array Properties

JavaScript arrays have many properties, but the `length` property is the most commonly used. It returns the number of elements in the array.

```javascript
let arr = ['element0', 'element1', 'element2'];
let len = arr.length;
```

This code snippet demonstrates how to access the `length` property of an array.

## Iteration

Iteration over arrays in JavaScript can be done in many ways, including `for` loops, `forEach`, and `for ... of`.

### Loops

The `for` loop is the most basic way to loop over an array.

```javascript
let arr = ['element0', 'element1', 'element2'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

This `for` loop logs each element in the array to the console.

### ForEach

The `forEach()` method executes a provided function once for each array element.

```javascript
let arr = ['element0', 'element1', 'element2'];
arr.forEach(element => console.log(element));
```

In this example, `forEach()` is used to log each element in the array to the console.

### For ... Of

The `for...of` statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects, and more.

```javascript
let arr = ['element0', '

element1', 'element2'];
for (const element of arr) {
  console.log(element);
}
```

In this example, a `for...of` loop is used to log each element in the array to the console.

## Transformation

Array transformation methods such as `map()`, `reduce()`, `filter()`, and `flatMap()` allow for powerful operations to be performed on arrays. These functions belong to the concepts of <a href="/javascript/functional-javascript">functional</a> programming. 

### Map

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
let arr = [1, 2, 3, 4];
let newArr = arr.map(x => x * 2);
```

In this example, `map()` is used to create a new array where each element is twice the corresponding element in the original array.

### Reduce

The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.

```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((total, value) => total + value, 0);
```

Here, `reduce()` is used to calculate the sum of the elements in the array.

### Filter

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let arr = [5, 12, 8, 130, 44];
let filtered = arr.filter(num => num > 10);
```

In this example, `filter()` is used to create a new array containing only the elements from the original array that are greater than 10.

### FlatMap

The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a `map()` followed by a `flat()` of depth 1.

```javascript
let arr = [1, 2, 3, 4];
let newArr = arr.flatMap(x => [x * 2]);
```

Here, `flatMap()` is used to create a new array where each element is twice the corresponding element in the original array.

## Multi-Dimensional Arrays

A multi-dimensional array is an array of arrays. You can create one by nesting arrays.

```javascript
let arr = [['element00', 'element01'], ['element10', 'element11']];
```

This creates a two-dimensional array. To access elements, you use two indices. For example, `arr[0][1]` would get `'element01'`.

## Spread and Rest Operator

The spread operator (`...`) allows an iterable to expand in places where zero or more arguments or elements are expected.

```javascript
let arr1 = ['element0', 'element1'];
let arr2 = [...arr1, 'element2', 'element3'];
```

This code creates `arr2` as an extension of `arr1` with additional elements. 

The rest operator (`...`) is used to represent an indefinite number of arguments as an array.

```javascript
function sum(...args) {
  return args.reduce((total, value) => total + value, 0);
}
```

In this function, `...args` is an array containing all arguments passed to the function.