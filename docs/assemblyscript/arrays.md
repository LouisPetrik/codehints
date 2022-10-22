---
title: Arrays in AssemblyScript
---


# Arrays in AssemblyScript 


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