---
title: Data types & Variables in AssemblyScript
sidebar_position: 3
---

# Data Types & Variables

Both concepts cannot be neglected when learning a new programming language. While AssemblyScript is very heavily
inspired by TypeScript, there are some important differences, especially when it comes to the data types, that are built in.

## Variables

Variables can be created as known from JavaScript with the keywords var, let and const.
While var shouldn't be used anymore, const is for creating constant variables.

To make values accessible to JavaScript, they can be exported:

```typescript
export const name: string = 'Max'
```

To import and use a variable like this in JavaScript:

```javascript
import { name } from './build/release.js'

console.log('The name is ', name.value)
```

## Data Types

### Integer Types

| Type | Description             |
| ---- | ----------------------- |
| i32  | 32-bit signed integer   |
| u32  | 32-bit unsigned integer |
| i64  | 64-bit signed integer   |
| u64  | 64-bit unsigned integer |
| i8   | 8-bit signed integer    |
| u8   | 8-bit unsigned integer  |
| i16  | 16-bit signed integer   |
| u16  | 16-bit unsigned integer |

unsigned = No negative values, signed = Negative values allowed

### Float types

| Type | Description  |
| ---- | ------------ |
| f32  | 32-bit float |
| f64  | 64-bit float |

### Strings

```typescript
const name: string = 'hello'
```

### Arrays

```typescript
const arr = new Array<string>(5)
```
