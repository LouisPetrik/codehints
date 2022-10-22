---
title: References in C++
---

# References 

References are related to pointers - one needs to understand the first one. They work similary like pointers. 
"References are pointers in disguise." References need to reference an already existing value, therefore they reference a variable. 

```cpp
int a = 5; 
// that's basically it "ref" is also called an alias. 
int& ref = a; 
// we can use ref now as if it were a, for example logging it. 
```

References can be used to make working with variables across different scopes easier: 
```cpp 
void increment(int value) {
  value++; 
}

int main() {
  int a = 5; 
  increment(a); 
  cout << a << endl; 
  // prints 5
}
```
The shown code will simply copy the value of a into the scope of "increment". Therefore, within the functions scope a brand new 
variable with the value of 5 will be created, and then incremented. a in the original scope of the main function is not changed. 

Instead, we can pass it as a reference in order to increment the original variable: 
```cpp
void increment(int& value) {
  value++; 
}

int main() {
  int a = 5; 
  increment(a); 
  cout << a << endl; 
  // prints 6
}
```

This does the same as the following code, but in an easier manner
```cpp
void increment(int* value) {
  (*value)++; 
}

int main() {
  int a = 5; 
  increment(&a); 
}
```