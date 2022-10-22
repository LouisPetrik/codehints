---
title: Arrays in AssemblyScript
---


# Arrays in AssemblyScript 

There are two types of Arrays, that can easily be confused with each other. 
For the first part, there are Arrays like we know them from JavaScript - second, there are Arrays 
as they appear in C, with one huge difference: The Arrays in C are fixed in size. In AssemblyScript, these
fixed Arrays are called static Arrays. 

# Arrays 

First, let's cover the "normal" arrays. 

## Creating Arrays 

There are two ways for creating arrays. 

```typescript
let numbers : i32[]
numbers = [1, 2, 3]
```

Or: 

```typescript
let numbers = new Array<i32>(3)

numbers[0] = 1; 
numbers[1] = 2; 
numbers[2] = 3; 
```

## Using Arrays in JavaScript

After importing the array from the file: 

```javascript
console.log(numbers.value)
```




# Static Arrays 


## Returning an Array 

```typescript
export function returnArr(num: i32): i32[] {
  const arr = new Array<i32>(3); 
  arr[0] = num; 
  arr[1] = num; 
  arr[2] = num; 
  return arr; 
}
```