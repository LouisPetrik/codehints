---
title: JavaScript Promises
---

# JavaScript Promises Cheat Sheet

JavaScript Promises are a robust way to handle asynchronous operations in your code. They help manage tasks that might not complete immediately, like fetching data from a server. Promises make it easier to reason about and write clean, maintainable code.

## Asynchronous vs. Synchronous Execution

In JavaScript, synchronous code executes sequentially, line by line. Asynchronous code, on the other hand, begins execution immediately but completes at a later time, allowing the program to continue running other operations in the meantime.

Here's an example of synchronous code:

```javascript
console.log('1')
console.log('2')
console.log('3')
```

And here's how asynchronous code might look:

```javascript
console.log('1')
setTimeout(() => console.log('2'), 0)
console.log('3')
```

In the synchronous example, the output will be `1, 2, 3` as expected. However, in the asynchronous example, even though '2' appears before '3' in the code, the output will be `1, 3, 2` due to the setTimeout function's delay.

## Writing a Promise

A <code>Promise</code> in JavaScript represents an operation that hasn't completed yet but is expected in the future. It's created using the <code>Promise</code> constructor, which takes an executor function with two parameters: resolve and reject.

```javascript
let promise = new Promise((resolve, reject) => {
	let condition = true
	if (condition) {
		resolve('Promise resolved successfully.')
	} else {
		reject('Error in promise.')
	}
})
```

The promise resolves successfully if the condition is true, but if the condition is false, it's rejected with an error.

## then()

The <code>then()</code> method is used with a Promise to specify what should happen when the Promise resolves. It takes two functions: one for success and one for failure.

```javascript
promise.then(
	(result) => console.log(result),
	(error) => console.log(error)
)
```

If the Promise is resolved, `result` logs to the console. If it's rejected, `error` is logged.

## await

The <code>await</code> operator is used to pause asynchronous function execution until a Promise is settled (that is, either fulfilled or rejected), returning the value from the fulfilled promise or rejected value.

```javascript
async function asyncFunc() {
	let response = await promise
	console.log(response)
}
asyncFunc()
```

The function `asyncFunc` waits for the Promise to resolve and then logs the response to the console.

## async

The <code>async</code> keyword is used to declare an asynchronous function that implicitly returns a Promise.

```javascript
async function asyncFunc() {
	return 'Hello, World!'
}
asyncFunc().then(console.log)
```

When `asyncFunc` is called, it returns a Promise. When the Promise resolves, "Hello, World!" is logged to the console.

## Promise.reject() & Promise.resolve()

The <code>Promise.reject()</code> and <code>Promise.resolve()</code> methods return a Promise that is rejected or resolved respectively, without having to use the Promise constructor.

```javascript
let resolvedPromise = Promise.resolve('Resolved!')
let rejectedPromise = Promise.reject('Rejected!')

resolvedPromise.then(console.log)
rejectedPromise.catch(console.log)
```

The first promise logs "Resolved!" when resolved and the second logs "Rejected!" when caught.

## Promise.all()

The <code>Promise.all()</code> method takes an iterable of promises and returns a new Promise that only fulfills when all the promises in the iterable have been fulfilled.

```javascript
let promise1 = Promise.resolve('First')
let promise2 = Promise.resolve('Second')

Promise.all([promise1, promise2]).then(console.log)
```

This logs `["First", "Second"]` once both promises have resolved.

## Promise.race()

The <code>Promise.race()</code> method takes an iterable of promises and returns a Promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects.

```javascript
let promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'))
let promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Second'))

Promise.race([promise1, promise2]).then(console.log)
```

This logs `Second` as the second promise resolves first.

## Promise.allSettled()

The <code>Promise.allSettled()</code> method returns a Promise that fulfills when all of the promises in the iterable have settled, regardless of whether they were fulfilled or rejected.

```javascript
let promise1 = Promise.resolve('First')
let promise2 = Promise.reject('Second')

Promise.allSettled([promise1, promise2]).then(console.log)
```

This logs `[{status: "fulfilled", value: "First"}, {status: "rejected", reason: "Second"}]` after both promises have settled.

## Promise.any()

The <code>Promise.any()</code> method returns a Promise that fulfills as soon as one of the promises in the iterable fulfills.

```javascript
let promise1 = Promise.reject('First')
let promise2 = Promise.resolve('Second')

Promise.any([promise1, promise2]).then(console.log)
```

This logs `Second` as the second promise is the first to fulfill.

## Asynchronous default functions in JS

Asynchronous default functions in JavaScript are functions that return Promises by default. Fetch is an example of such a function.

```javascript
async function fetchData() {
	let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
	let data = await response.json()
	console.log(data)
}

fetchData()
```

The `fetchData` function fetches data from an API and logs it to the console. The fetch function returns a Promise, and when that Promise resolves, the data is logged to the console.

## Error Handling in Promises

When working with Promises, it's crucial to handle potential errors. The `catch()` method serves this purpose. It's chained at the end of a Promise sequence and catches any errors that may occur during the execution of the Promise.

```javascript
promise
	.then((result) => console.log(result))
	.catch((error) => console.log('Caught:', error))
```

In this example, if an error occurs in the `promise`, it will be caught and logged to the console.

## Promise Chaining

Promises can be chained to perform several operations sequentially. The `then()` method returns a new Promise, allowing you to chain additional `then()` calls.

```javascript
new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000)
})
	.then((result) => {
		console.log(result)
		return result * 2
	})
	.then((result) => {
		console.log(result)
		return result * 2
	})
	.then((result) => {
		console.log(result)
		return result * 2
	})
```

In this code snippet, each `then()` call multiplies the result by 2 and logs it, with each operation happening after the previous one has completed.

## Promise.finally()

The `finally()` method is used when you want to run some code regardless of the promise's resolution. The handler in `finally()` doesn't receive any arguments and doesn't affect the promise chain's returned value.

```javascript
new Promise((resolve, reject) => {
	setTimeout(() => resolve('Promise resolved'), 2000)
})
	.finally(() => console.log('Promise ready'))
	.then((result) => console.log(result))
	.catch((error) => console.log('Caught:', error))
```

In this example, "Promise ready" is logged to the console when the Promise is ready, whether it's resolved or rejected.

This cheat sheet covers the fundamental aspects of Promises in JavaScript. With this guide, you should be equipped to handle asynchronous operations effectively in your JavaScript programs. Remember, practice is key when working with these concepts. Keep coding!
