---
title: Classes in Python
sidebar_position: 3
---


# Classes in Python

Python is an object-oriented programming language and classes are the fundamental building blocks for creating objects. This cheat sheet will walk you through all the basics of classes in Python.

## Creating a Class

In Python, we create a class using the <code>class</code> keyword. The name of the class usually follows CamelCase convention.

```python
class MyClass:
    x = 5
```

In this example, we've created a class named <code>MyClass</code> with a single attribute <code>x</code>. You can create an object of this class and access its attribute using dot notation.

## Instances

An instance is a specific object created from a particular class. You can create an instance of a class by calling the class name as if it were a function.

```python
p1 = MyClass()
print(p1.x)
```

In this snippet, <code>p1</code> is an instance of <code>MyClass</code>. We're printing the attribute <code>x</code> of this instance, which should output 5.

## \_\_init\_\_() Function

The <code>\_\_init\_\_()</code> function in Python is a special method that's automatically called when an object of a class is instantiated. It's used to initialize the attributes of the class.

```python
class MyClass:
    def __init__(self, name):
        self.name = name

p1 = MyClass("John")
print(p1.name)
```

In this example, <code>\_\_init\_\_()</code> is used to assign a name to the instance at the time of creation. We're passing "John" as a parameter while creating <code>p1</code>, which is then accessible as an attribute of the instance.

## Methods

Methods are functions defined inside the body of a class. They are used to perform operations that sometimes utilize the attributes of the class.

```python
class MyClass:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, {self.name}!")

p1 = MyClass("John")
p1.greet()
```

In this code, we've added a method <code>greet</code> to our class that prints a greeting message. We're calling this method on the <code>p1</code> instance, which should print "Hello, John!".

## self Parameter

The <code>self</code> parameter in Python is a reference to the current instance of the class. It is used to access variables and methods associated with the class.

```python
class MyClass:
    def __init__(self, name):
        self.name = name

    def change_name(self, new_name):
        self.name = new_name

p1 = MyClass("John")
p1.change_name("Jane")
print(p1.name)
```

In this snippet, the <code>change_name</code> method uses the <code>self</code> parameter to modify the <code>name</code> attribute of the instance. After calling this method on <code>p1</code>, printing <code>p1.name</code> should output "Jane".

## Modifying Objects

You can modify the attributes of an object directly, or by defining methods for the purpose.

```python
p1.name = "Alice"
print(p1.name)
```

In this example, we've directly changed the <code>name</code> attribute of <code>p1</code> to "Alice". Printing <code>p1.name</code> should now output "Alice".

## Inheritance

Inheritance allows us to define a class that inherits all the methods and properties from another class. The class from which we're inheriting is called the parent class, and the class that is inherited is called the child class.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}.")

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def study(self):
        print(f"I'm studying in grade {self.grade}.")

s1 = Student("Alice", 12, 6)
s1.greet()
s1.study()
```

In this example, we have a parent class <code>Person</code> and a child class <code>Student</code>. The <code>Student</code> class inherits the attributes and methods of the <code>Person</code> class, demonstrated by the usage of the <code>super()</code> function. We also add a new attribute <code>grade</code> and a new method <code>study</code> to the <code>Student</code> class. When we create an instance of <code>Student</code> and call the <code>greet</code> and <code>study</code> methods, it should print "Hello, my name is Alice." and "I'm studying in grade 6.", respectively.