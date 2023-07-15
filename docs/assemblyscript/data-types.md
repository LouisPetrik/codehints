---
title: Data types 
sidebar_position: 3
---

<head>
<title>
Understanding Data Types in AssemblyScript
</title>
</head>

# Understanding Data Types in AssemblyScript

When learning a new programming language, understanding variables and data types is crucial. AssemblyScript, heavily inspired by TypeScript, presents some unique differences, particularly in its data types. This article will delve into the data types in AssemblyScript, providing a comprehensive guide for both beginners and advanced users.

## Variables in AssemblyScript

In AssemblyScript, variables can be created using the familiar JavaScript keywords: `var`, `let`, and `const`. However, the use of `var` is generally discouraged, while `const` is used for creating constant variables. 

For instance, to make values accessible to JavaScript, they can be exported as follows:

```javascript
export const name: string = 'Max'
```

To import and use a variable like this in JavaScript, you would do the following:

```javascript
import { name } from './build/release.js'
console.log('The name is ', name.value)
```

## Data Types in AssemblyScript

### Integer Types

AssemblyScript offers a variety of integer types, each with its unique properties. Here's a straightforward guide:

- `i32`: 32-bit signed integer
- `u32`: 32-bit unsigned integer
- `i64`: 64-bit signed integer
- `u64`: 64-bit unsigned integer
- `i8`: 8-bit signed integer
- `u8`: 8-bit unsigned integer
- `i16`: 16-bit signed integer
- `u16`: 16-bit unsigned integer

It's important to note that unsigned integers do not allow negative values, while signed integers do.

### Float Types

AssemblyScript also supports float types, which are:

- `f32`: 32-bit float
- `f64`: 64-bit float

### Strings and Arrays

In AssemblyScript, strings and arrays are defined as follows:

```javascript
const name: string = 'hello'
const arr = new Array<string>(5)
```

## Conclusion

Understanding the data types in AssemblyScript is a huge step towards mastering this powerful language. Whether you're just getting started or looking to advance your skills, this guide provides the basics and beyond.

