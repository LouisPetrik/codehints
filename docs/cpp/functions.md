---
title: Functions in C++
---

# Functions

Functions (or methods, when bound to a class) are the modern equivalent of routines. Just like routines, they help us to write code which is reusable. 
Functions in C++ work almost like in C or other programming languages. Just like in C, Java or other type-based languages, you need to provide your functions with types. 
These types specifiy the parameters and the potential return value. Compared to JavaScript, Swift or Python for example, functions are not created via using a keyword. 

To fully understand this concept in C++, one must understand declaration and definition. 
The following is a function declaration, which is usually stored in a header file: 

```cpp 
int add(int a, int b); 
```
Then, we usually define them in an actual C++ file: 
```cpp
int add(int a, int b) {
  return a + b; 
}
```


## Passing Functions as parameters 

```cpp
int add (int a, int b) {
  return a + b; 
}

int useFunction(int a, int b, function<int(int, int)> func) {
  return func(a, b); 
}

int main() {
  cout << useFunction(2, 3, &add) << endl; 
}
```

## Virtual functions

B is a subclass of A, and A holds a virtual function. Therefore, we can override it in the B file, resulting in a method, which is able to do something else. 
Code coming soon. 


## Function pointers 

Function pointers help, to assign functions to variables. They also help, to pass functions to other functions, for example. 


```cpp 
void PrintValue(int value) {
  cout << "Value: " << value << endl;
}

void ForEach(const vector<int> &values, void (*func)(int)) {
  for (int value : values) {
    func(value);
  }
}

int main() {
  vector<int> values = {1, 2, 3, 4, 5};
  ForEach(values, PrintValue);
  return 0;
}
```
In the example, the PrintValue function is passed into the ForEach function, so it can be used there in another way. 

## Lambdas 

Lambdas could be viewed as throw-away functions, which help to receive the advantages of a function without the physical presence of a normal function. 
Whenever we have a function pointer, we can use a lambda. 

A simple lambda, saved to a variable, just like in JavaScript: 

```cpp
auto lambda = []() { cout << "Hello world" << endl; };
lambda(); 
```
Special about this definition is, that outside variables cannot be used inside it. To solve this, we can specify everything in the brackets. 
Putting in a "=" means, we want to make everything available inside the function. 

This way, we make the variable available inside it: 
```cpp
int a = 5; 

auto lambda = [a]() { cout << "Hello world" << endl; };
lambda(); 
```

There are many other ways to specify, you can check them out in a C++ reference. 

