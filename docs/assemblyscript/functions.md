---
title: Functions in AssemblyScript
sidebar_position: 4
---

# Functions in AssemblyScript

Functions in AssemblyScript work just like in TypeScript.
There are only two differences:

-  You need to provide types for parameters and returns
-  Closures are not supported yet. More on it later in the article

## Writing a function

This example of a function is provided in the starter template of every AssemblyScript project.

```typescript
function add(a: i32, b: i32): i32 {
	return a + b
}
```

## Calling functions in JavaScript

Functions need to be exported before you can use them in JavaScript

```typescript
export function add(a: i32, b: i32): i32 {
	return a + b
}
```

Once you build the code, import and use the function in JavaScript

```javascript
import { add } from './build/release.js'
console.log(add(2, 1))
```

## Closures

The following code structure would lead to erros,
as we create different closures. A variable in the first
scope could not be accessed in the wrapped scope.

```typescript
function () {
    return function b() {
        return
    }
}
```

```typescript
function sumTimesTen(a: i32, b: i32): i32 {
	const sum: i32 = a + b

	return sum * 10
}
```
