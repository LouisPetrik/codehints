---
title: Methods in Java
sidebar_position: 2
---

# Methods in Java

Methods are not to be confused with functions.
As you might know the term functions, let's elaborate on what methods are.
Methods are functions, bound to a class.
As everything in Java is bound to a class, we almost only speak of methods here.

```java
static int timesTwo(int x) {
    return x * 2;
}

public static void main(String args[]) {
    System.out.println(timesTwo(2)); // 4
}
```

Methods can be used in code before they are declared - as Java code is compiled, this is no problem.

## Recursion
