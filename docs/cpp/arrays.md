---
title: Arrays in C++
---

# Arrays 

An array is a collecting of data, of the same type and with a fixed length. The fixed-size property is what often sets them apart from lists. 
Compared to arrays, <a href="cpp/vectors">vectors</a> can be seen as lists in C++, as their size is not fixed. But why should I use arrays over vectors then if vectors are less forcing? 
Good question. The reason is performance. Under the hood, vectors are arrays too. Yet, when adding or removing elements, it comes to a costly restructuring of the array. 
Therefore, arrays have an edge over vectors performance-wise. 

Here is what you need to know about arrays in C++. 

## Defining an array: 

```cpp
int example[5]; 
example[0] = 1; 
example[1] = 2; 
```

 
## Using a for loop shorthand
```cpp
int example[5]; 

for (int i = 0; i < 5; i++) 
  example[i] = 2; 
```

## Using pointers on arrays 
In theory, one could use pointer arithmetics to set single values in the array. Here is an example. 
First, the third value in the array will be set to 5, then, via the pointer, to 6. 
```cpp
int example[5];
int* ptr = example;
  
example[2] = 5;
// changing the value with the pointer:
*(ptr + 2) = 6;

// prints 6   
cout << example[2] << endl;

```

## Creating arrays on the heap 

```cpp
int* anotherArray = new int[5]; 
```

As this array is now created on the heap, the data will last until we destroy it manually: 
```cpp
delete[] anotherArray; 
```

## Getting the size of an array

Getting the number of elements of an array is different for array on the stack vs. arrays on the heap. 

```cpp
// this array is created on the stack 
int a[5]; 
// is the number of elements in this array: 
int count = sizeof(a) / sizeof(int); 

// this array is created on the heap: 
int* example = new int[5]; 
```

For arrays on the heap you can't retrieve the size via a function. You need to keep track of it yourself. 

## Returning an array from a function

```cpp
int *returnArr() {
  int coordinates[2] = {1, 2};
  return coordinates;
}

int main()
{
  int x = returnArr()[0];
}
```

## Passing an array as a parameter
Its as simple as that. 

```cpp
void doubleNumbers(int numbers[3]) {
  for (int i = 0; i < 3; i++) {
    cout << numbers[i] * 2 << endl;
  }
}

int main() {
  int numbers[3] = {1, 2, 3};
  doubleNumbers(numbers);
  return 0;
}
```