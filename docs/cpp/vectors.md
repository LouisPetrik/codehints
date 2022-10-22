---
title: Vectors in C++
---

# Vectors (dynamic Arrays)
std::vector are usually not called vectors, often array links or dynamic arrays. 
Usually, you do not to provide a length to the vector - you can add elements and it will resize under the hood, 
as inside of the container a new array is created on each resize. 

First of all, you need to include the container: 
```cpp 
#include <vector>
```

### Creating a vector 
```cpp 
std::vector<int> numbers; 
```
Primitive types can be passed to the vector as the type. 

### Adding data to the vector: 
```cpp 
numbers.push_back(1); 
numbers.push_back(2); 
```

### Iterating over the vector: 
one can iterate over it with an for loop, as we can get the number of the elements in the vector: 

```cpp
for (int i = 0; i < numbers.size(); i++)
  cout << numbers[i] << endl; 

// or: 

for (int number : numbers)
  cout << number << endl; 
```

### Cleaning the whole vector: 
```cpp
numbers.clear(); 
```

### Returning a vector

```cpp
vector<int> returnVector() {
  vector<int> values;

  return values;
}
```

With assigning the value to another vector: 

```cpp
vector<int> returnNumbers() {
  vector<int> numbers;
  numbers.push_back(1);
  numbers.push_back(2);

  return numbers;
};

int main() {  
  vector<int> newNumbers = returnNumbers();

  cout << newNumbers[0] << endl;
  // prints "1"
  return 0;
}
```


### Passing a vector to a function 

There are two ways to do so: 
1. Passing by value
2. Passing by reference

When passing by value, inside of the recievings function scope, a copy is created: 
```cpp
void printFirstNumber(vector<int> numbers) {
  cout << numbers[0] << endl;
};

int main() {

  vector<int> numbers;

  numbers.push_back(1);
  numbers.push_back(2);
  numbers.push_back(3);

  printFirstNumber(numbers);

  return 0;
}
```

When passing by reference, we can mutate the original state: 

```cpp
void changeFirstNumber(vector<int> &numbers) {
  numbers[0] = 2;
};

int main() {
  // vector<int> numbers;
  vector<int> numbers;
  numbers.push_back(1);

  changeFirstNumber(numbers);

  cout << numbers[0] << endl;
  // prints "2" 

  return 0;
}
```

### Vector of arrays 

A vector, as a not-fixed structure in size can hold multiple arrays and therefore act as an flexible two-dimensional array alternative.
Coming soon. 

```cpp

```

### Loop over a vector

```cpp
vector<int> numbers;

numbers.push_back(1);
numbers.push_back(2);
numbers.push_back(3);

for (int number : numbers) {
  cout << number << endl;
}
```