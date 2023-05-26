---
title: Functions in Python
sidebar_position: 2
---


# Functions in Python 

A function in Python is a reusable block of code that performs a specific task. It allows you to break your program into smaller, manageable parts, promoting code reuse and modular programming.


```python
def function_name():
    # Code block
```

Functions are defined using the def keyword, followed by the function name and parentheses.
The code block within the function is indented and executed when the function is called.
The pass statement is a placeholder indicating an empty code block.
Parameters and Arguments:

## Function Parameters 
Parameters are placeholders in a function's definition, while arguments are the actual values passed to a function when it is called.


```python
def greet(name):
    print("Hello, " + name + "!")
```

In the example, name is a parameter that represents the name of the person to greet.
When calling the greet function, you pass an argument to the function, which gets assigned to the name parameter.

### Default Parameters 

```python
def greet(name, greeting="Hello"):
    print(greeting + ", " + name + "!")
```
The <code>greeting</code> parameter is now a so-called default parameter, which means it has a default value of "Hello". If no argument is provided for greeting, it will use the default value.

### Passing Objects as Parameters 
In Python, objects can be passed as parameters to functions. This allows you to work with complex data structures or custom objects.

```python
def print_person(person):
    print("Name:", person.name)
    print("Age:", person.age)
```

In the example, the print_person function takes an object person as a parameter. The function can access the attributes of the person object, such as name and age, and perform operations on them.


## Return 

Functions in Python can return values using the <code>return</code> statement. This allows functions to provide output or results back to the caller.

```python
def add_numbers(a, b):
    return a + b
```

In the example, the <code>add_numbers</code> function takes two parameters, a and b, and returns their sum using the <code>return</code> statement. The returned value can be assigned to a variable or used in other parts of the code.



## Recursion

Recursion is a powerful technique in which a function calls itself. It is particularly useful for solving problems that can be broken down into smaller, similar subproblems.


```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```

In the example, the factorial function calculates the factorial of a number using recursion.
The base case is defined when n equals 0, which returns 1.
The recursive step calls factorial with n - 1, gradually reducing the problem until the base case is reached.

## *args 

The keyword <code>*args</code> allows a function to accept a variable number of arguments. It is useful when you don't know in advance how many arguments will be passed to the function.
```python
def print_arguments(*args):
    for arg in args:
        print(arg)
```

In the example, the print_arguments function uses the *args parameter to accept any number of arguments. The function then iterates over the arguments using a for loop and prints each argument. 

## Pass 

The <code>pass</code> keyword in Python is used as a placeholder when a statement is syntactically required but you don't want to execute any code.


```python
def empty_function():
    pass
``` 

In the example, the empty_function is defined but does not have any code inside the function body. It uses the pass keyword as a placeholder, indicating that no code execution is intended.

This extended cheat sheet covers additional subtopics of functions in Python, including default parameters, passing objects as parameters, return values, the *args keyword for variable arguments, and the pass keyword as a placeholder. Additionally, you can explore other Python libraries like:


## Higher-Order Functions

Higher-order functions are functions that can take other functions as arguments or return functions as results. They enable powerful functional programming paradigms in Python.



```python
def multiply_by(n):
    def multiplier(x):
        return x * n
    return multiplier

double = multiply_by(2)
result = double(5)
print(result)  # Output: 10
```

In the example, multiply_by is a higher-order function that returns a function, multiplier, which multiplies its argument by n.
We assign the returned function to double, which becomes a function that doubles any value passed to it.
Finally, we call double(5), which outputs 10 by multiplying 5 by 2.
This cheat sheet covers the basics of functions, parameters and arguments, recursion, and higher-order functions in Python. Use these code snippets and explanations as a handy reference while programming in Python.

<b>Note</b>: Make sure to replace function_name, greet, name, greet("Alice"), factorial, n, double, multiply_by, multiplier, x, result, and "Alice" with appropriate names and values relevant to your code.
