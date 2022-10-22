---
title: Pointers in C++
---

# Pointers 

A pointer is an integer, which stores a memory address. Types can be used with pointers but more on a syntactical-level to make clear what the value retrieved will be. 
Under the hood, using types for a pointer doesn't change anything at all. 

```cpp
// surely the simplest pointer one could write. 
void* ptr = nullptr; 
```

```cpp
int var = 8; 
// assining the memory address of this value to the pointer: 
void* ptr = &var; 

// would lead to the same result: 
int* ptr = &var; 
```

Only when assining for example an double to this pointer as type, this would lead to an error. 

## Writing to the data behind the memory address: 
```cpp 
int var = 8; 
int* ptr = &var; 
*ptr = 10; 

```

## Creating a variable on the heap

```cpp
// asks for 8 bytes of memory, returns a pointer 
char* buffer = new char[8]; 
// 8 bytes, all set to 0. This is heap-allocated 
memset(buffer, 0, 8); 
// therefore needs to be deleted: 
delete[] buffer; 
```