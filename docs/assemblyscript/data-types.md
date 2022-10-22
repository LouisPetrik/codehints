---
title: Data types in AssemblyScript
sidebar_position: 3
--- 

# Data types in AssemblyScript



## Primitve Types 

### Integer Types

| Type | Description             |
|------|-------------------------|
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

| Type | Description             |
|------|-------------------------|
| f32  | 32-bit float            |
| f64  | 64-bit float            | 

## Complex types 


### Strings 

```typescript
const name : string = "hello"
```

### Arrays 

```typescript
const arr = new Array<string>(5)
```