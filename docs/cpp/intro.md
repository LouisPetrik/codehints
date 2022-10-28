---
title: Introduction to C++
sidebar_position: 1
slug: /category/c
---

# What is C++?

C++ is a multiparadigm programming language known for its performance, popularity, and difficulty. 
Bjarne Stroustrup developed the language in 1979 as an extension of the already famous programming language C. 
Therefore, C++ should be seen as a superset to C, not an entirely new creation. The letter thing is noticeable, especially when using packages - many data structures and functions are inherited from C. 

C++ can be written purely object-oriented but also using the functional or imperative paradigm. 

Until this day, tons of software is written in C++. This is especially the case when there is a need for performance, which is the reason C++ is used in operating systems, servers, and extensive algorithm implementations. 


## Hello world in C++ 

```cpp
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

Create a new file on your machine, called main.cpp and paste the code above into it. 
Depending on your operating system, there might be compiler for C++ built into it. 

When working on Windows, I highly recommend using Visual Studio to get started. 
On MacOS, install a compiler like clang in the terminal, or get started using XCode, which can compile  
C/C++ too. 

### On the structure of C++

As you can see, our code contains a main function and includes a package. 

The package is built into C++, called "iostream" and holds functions for inputting and outputting data. 
Addressing data from a package can be done using the <code>::</code> operators. 
Therefore, the function <code>cout</code> from the standard library is called <code>std::cout</code>. Alternatively, one can use a global namespace instead of explicitly addressing each function's origin. 

```cpp
using namespace std; 

int main() {
    cout << "Hello World!";
    return 0;
}
```


Each C++ "project" needs a main function, and only one is allowed. This function is executed automatically, and there is something special about it: 
Compared to all other possible functions in C++, the main function is allowed to not return anything. Therefore, the <code>return 0;</code> in our 
Hello World example is quite optional. 


## Author's Notes

Hard to write simple things with it, easy to blow of your feet while trying.

## Sources

The incredible video series by The Cherno on YouTube.

## Additional Ressources

-  [C++ by The Cherno](https://www.youtube.com/watch?v=18c3MTX0PK0&list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb)
