---
title: Arrays in Java
sidebar_position: 2
---

# Arrays in Java

Arrays in Java work very similar to the "original" arrays we know from system-near programming languages like C and C++.
Therefore, arrays are fixed in size and the size must be defined during declaration.

## Declaring and Initializing an array

Only declaring array in Java is possible in two ways. Both syntaxes are legitimate.

```java
String people[] = new String[3];
String[] people = new String[3];
```

The examples create empty arrays with the size of 3. Instead, we can also assign the values
directly:

```java
String people[] = { "Max", "Anna", "Tom" };
```

As Java can infer the number of elements, we don't need to provide a size.

A value from an array can be returned with the syntax we know from most programming languages

```java
String[] people = { "Anna", "Max" };
System.out.println(people[0]); // Anna
System.out.println(people[1]); // Max
```

## Setting and overwriting array values

```java
String people[] = new String[3];
people[0] = "John";
people[1] = "Tom";
people[2] = "Anna";
```

## Looping over arrays

With a for-loop:

```java
String people[] = { "Max", "Anna", "Tom" };
for (int i = 0; i < people.length; i++) {
  System.out.println(people[i]);
}
```

Or, with a for-each:

```java
String people[] = { "Max", "Anna", "Tom" };
for (String person : people) {
  System.out.println(person);
}
```
