---
title: ArrayList in Java (Dynamic Arrays)
sidebar_position: 4
description: Array lists are the dynamic alternative to arrays in Java. Learn about iteration, creation, altering and deleting values, and much more.
---

# ArrayList in Java

Array lists are an alternative to arrays in Java.
The main difference is that array lists are not fixed in size and do not receive a number of elements to hold.
Therefore, elements can be added to an array lists and deleted from it.

## Declaring and Initializing an Array List

Important is to import ArrayList from the package <code>java.util</code>, which is available by default.

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();

        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

    }
}
```

Instead of adding the elements to the empty list, you can initialize the list right away:
(You need to import <code>java.util.Arrays</code> in order for this to work)

```java
ArrayList<Integer> numbers = new ArrayList<Integer>(
    Arrays.asList(1, 2, 3)
);
```

There is even a third way:

```java
ArrayList<Integer> numbers = new ArrayList<Integer>() {
    {
        add(1);
        add(2);
        add(3);
    }
};
```

## Initializing an Array List from an Array

The above shown method <code>Arrays.asList()</code> can be used to get an array list based on an array:
(Don't forget to import <code>java.util.Arrays</code>)

```java
Integer[] numbers = {1, 2, 3};

ArrayList<Integer> numbersList = new ArrayList<Integer>(
    Arrays.asList(numbers)
);
```

## Accessing, Altering and Deleting Elements from the Array List

Accessing an element, for example in order to print it, can be done with get():

<code>numbersList.get(0)</code>

0 is the index of the first element in the list.

Deleting an element from the list:

<code>numbersList.reomve(index)</code>

When deleting from an array list, the size is reduced. Therefore, there is no empty space in the list left.

In a similar way, we can overwrite values at a given position:

<code>numbersLits.set(index, newValue)</code>

## Looping over the Array List

Iterating can be done with a class for-loop:

```java
for (int i = 0; i < numbersList.size(); i++) {
    System.out.println(numbersList.get(i));
}
```

or with the cleaner for-each loop:

```java
 for (int num : numbersList) {
    System.out.println(num);
}
```
