---
title: Datatypes in Java
--- 

# Java Datatypes

In Java, data types are essential as they define the kind of data a variable can hold. There are two types of data types in Java: primitive and non-primitive. This cheat sheet will provide a succinct overview of these types, their usage, casting, operators, operator shorthand, and their memory consumption.

## Primitive Datatypes

Primitive datatypes in Java are predefined by the language and named by a reserved keyword. They include <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>boolean</code>, and <code>char</code>.

```java
byte b = 10;
short s = 500;
int i = 1000;
long l = 15000L;
float f = 5.75f;
double d = 19.99;
boolean bool = true;
char c = 'A';
```

Here, we've declared eight variables each representing a different primitive datatype, and each initialized with a value. The <code>L</code> suffix for the long datatype and <code>f</code> for float are mandatory.

## Non-Primitive Datatypes

Non-primitive datatypes, also known as reference datatypes, are created by the programmer and not defined by Java (except for Strings). They include Classes, Interfaces, and Arrays. The default value of any reference datatype is <code>null</code>.

```java
String str = "Hello World";
int[] array = {1, 2, 3, 4, 5};
```

In this code snippet, we're declaring a String and an array. The String is a sequence of characters, and the array is a collection of elements of the same type. For more information about arrays, visit [/java/arrays](/java/arrays).

## Using a Datatype

To use a datatype in Java, you must declare a variable with the desired datatype and then assign a value to it.

```java
int num = 10;
```

In this example, <code>num</code> is a variable of type <code>int</code>, and it's being assigned the value <code>10</code>.

## Casting

Casting in Java is the process of converting one data type into another. This is needed when you want to perform an operation that requires a different data type than the one you have.

```java
int i = 100;
long l = i;  // implicit casting, int to long
double d = (double) i; // explicit casting, int to double
```

In the above snippet, implicit casting automatically converts the integer <code>i</code> to a long <code>l</code> as long is a larger datatype. But to convert <code>i</code> to a double, we need explicit casting as shown.

## Operators

Operators are special symbols that perform specific operations like arithmetic, logical, and bitwise operations. Examples include <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (arithmetic), <code>&&</code>, <code>||</code> (logical), <code>&</code>, <code>|</code>, <code>^</code> (bitwise), among others.

```java
int a = 10, b = 20;
int sum = a + b; // arithmetic operator
boolean result = (a > b); // relational operator
```

In the first line, an arithmetic operator is used to add two integers. In the second line, a relational operator. 