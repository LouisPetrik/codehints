---
title: Variables and Data Types in C++
---

# Variables & Data types
The following section focuses on data types but also on different types of variables in C++. Yes, there is an important differences between both. 
Data types describe and regulate the data we put into our variables. Variable types define how the variable, as the data container, should behave. 
Let's start with the most basic data types in C++ 


## Strings

Often, using Strings is avoided for performance gains. 
As an high-performance alternative for using strings, C++ offers Small Strings, which will not allocate memory on the heap. 

## Static
The static keyword before a variable defines its visibility. 

```cpp
static int num = 10; 
```

When using static outside of a class or a struct, it means that the variable is only visible to all other parts of the translation unit. When using it in a class or struct, it means the variable is only visible with
the structure. 

Having the same global variables in two different files leads to an error. Using the static keyword on one of the variables, the error is resolved, as they are no longer conflicting in the same scope. 

## new Keyword 

Finds a block of memory big enough for the structur and then returns a pointer to it. 
The new-keyword will allocate the memory on the heap. 
```cpp
int* b = new int;
// an array: 
int* arr = new int[50];  
```

Under the hood the new-keyword will use malloc, which should not be used by hand in C++. 

Don't forget to delete the value again: 

```cpp
delete b; 
// deleting the array: 
delete[] arr; 
```


## auto Keyword
The auto keyword helps us to deduce the typ of a variable. Normally, we provide the type of every variable and function to it. 

```cpp
int a = 5;  
auto b = a;

// or: 
auto c = 5; 
```

Mostly, the auto keyword is a danger, as it hides to 
According to the Cherno on YouTube, for-loops are a great case for the auto-keyword: 

```cpp
vector<string> strings;
strings.push_back("apple");
strings.push_back("orange");
  
for (auto it = strings.begin(); it != strings.end(); it++) {
  cout << *it << endl;
}
```

The auto keyword makes the whole code much more readable, compared to writing out the whole type like this: 
```cpp
for (vector<string>::iterator ....)
```