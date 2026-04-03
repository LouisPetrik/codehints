---
title: Structures in C++
---

# Structures 

Through structures, multiple values can be grouped together. 
When providing the name after the curly braces, we have a local structure, which behaves like an instance of an object and cannot be used as a type. 

```cpp
struct {
  vector<int> numbers;
  vector<char> characters;
} myStruct;

int main() {
  myStruct.numbers.push_back(1);
  myStruct.numbers.push_back(2);
  myStruct.numbers.push_back(3);

  for (int num : myStruct.numbers) {
    cout << num << endl;
  }
  return 0;
}
```

In case you want to use the struct as a type: 

```cpp
struct myStructType {
  vector<int> numbers;
  vector<char> characters;
};

int main() {
  myStructType values;

  values.numbers.push_back(1);
  values.numbers.push_back(2);
  values.numbers.push_back(3);

  for (int num : values.numbers) {
    cout << num << endl;
  }
  return 0;
}
```