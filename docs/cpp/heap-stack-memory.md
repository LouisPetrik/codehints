---
title: Stack, Heap and Static Memory in C++
---

# Stack, Heap and Static Memory

## Allocating variables in the memory

```cpp 
int main() {
  // in the stack
  int value = 5; 
  int array[5]; 

  // in the heap 
  int* hvalue = new int, 
  // dereferencing it 
  *hvalue = 5; 

  int* harray = new int[5];
}

```


Stack-located stuff gets freed automatically. This happens once the end of the scope is reached. 
Everything in the heap is up to us to be cleaned up. 
Deleting stuff from the heap: 

```cpp
int main() {
  int* hvalue = new int; 
  *hvalue = 5; 

  int* harray = new int[5]; 

  delete hvalue; 
  delete[] harray;
}
```

Generally, allocate heap objects with the *-notation. 


## malloc and free 

First of all, both are pretty outdated and there are better alternatives. Use new and delete instead. 
malloc and free are the c-way of new and delete in c++. 
malloc generelly allocates memory in the heap. The parameter for the malloc-function 
is the number of bytes. malloc returns a void-pointer, so casting is necessary, therefore there is no type-safety. 
malloc will never call the constructor of the class behind the object. Also, malloc and free and delete and new must never be mixed. 

```cpp
// For an 10-length array of integers: 10 * size of int, so 40 bytes which are allocated. 
int* p = (int*)malloc(sizeof(int) * 10); 
p[0] = 100; 

// same as delete-function. 
free(p); 

```