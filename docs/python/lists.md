---
title: Lists in Python
sidebar_position: 2
slug: /python-lists
---


# Python Lists Cheat sheet

Lists are data structures, capable of holding multiple elements, even of different types. Compared to arrays, lists are not fixed in size. 

## Creating lists 
There are multiple ways for initizalizing a list in Python, just as in other programming languages. Yet, there is one key difference: Variables in Python must be assigned a value by default. You can't create "empty" variables. 

### Creating an empty list 

As I mentioned before, you need to assign at least something to your variable. For a list, this is the minimal way: 

```python
numbers = []
```

Then, you can append values: 

```python 
numbers.append(1)
numbers.append(2)
numbers.append(3)
```

### Providing default values 

```python
numbers = [1, 2, 3]
```

### Filling a list 

From other languages, you might now functions on lists like fill(), which fill up your list / array with a provided value. 
In Python, you can fill your list with: 

```python
ones = [1] * 3 

ones
# [1, 1, 1]
```

### Generating a list based on a range 
The range function can be used to return numeric values in an interval. 

```python 
numbers = [*range(1, 10, 1)]

numbers 
# [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The third parameter is the steps. Setting it to 2 would return a list of 1, 3, 5, 7, 9. 



## Accessing list elements 

Python is known for its capabilites in working with lists. Let's cover the basics before we dive into the special stuff. 
The indicies of elements in lists are starting at 0, like in most languages. Getting an element is easy: 

```python
numbers = [1, 2, 3]

print(numbers[0])
# 1
```

### Accessing with negative indicies 

Instead of accessing the last element of a list via its length, Python offers a smarter way. 

```python
numbers = [1, 2, 3]

numbers[-1] # 3 
```

-1 gives you the last element, -2 the second last and so on. 

### Getting every nth element 

Python provides an insanely useful feature for retrieving values from lists. 

```python 
numbers = [1, 2, 3, 4, 5, 6]

numbers[::2]
# [1, 3, 5]
```
Setting the slice step to 2, we get every second element starting with 1. 




## Deleting elements from a list 


### remove()

With the remove function, an element can be deleted from the list. 

```python 
numbers = [1, 2, 3]

numbers.remove(2)

# [1, 3]
```


### pop()

Pop returns the last element of the list and removes it from the list. 

```python 
numbers = [1, 2, 3]

numbers.pop() # 3 

numbers [1, 2]
```

In case the element which is to be deleted appears multiple times, only the first occurence is deleted. 

## Iterating over lists 

### for each 

The most primitive way for iterating over a Python list is using for-each: 

```python
numbers = [1, 2, 3]

for num in numbers: 
    print(num`
```

The for x in y syntax can be just for almost all iterables in Python. 


### for in range 
Alternatively, the for loop can be paired with the range() function, which returns all numeric values 
starting from 0 up until the provided value. When providing the number of elements, range therefore counts up all the indicies. 
Therefore, you need to access the elements in the list manually, once you have the indicies: 

```python 
numbers = [1, 2, 3]

for i in range(len(numbers)): 
    print(numbers[i])
```


## Transforming lists 
The following section focuses on transforming the values and / or the structure of lists in Python. 
This can be achieved by altering the orignal values (mutation) or without, by returning the transformed data (immutability). 

First, let's cover the functional concepts map, reduce and filter, which can be seen as mathematical functions, not altering the original values. 

### map 
The function "map" is not to be confused with the data structure "Map", which holds key-value pairs in many programming languages. 
map is mapping a provided value (x) to the transformed value (y), just like in maths. 

map takes a function as the single parameter. The function does something to the data, so each element of the list. 

```python
numbers = [1, 2, 3]
double = list(map(lambda num: num * 2, numbers))

double # [2, 4, 6]

# The original list is untouched: 
numbers # [1, 2, 3]
```

### reduce
reduce works similary like map. The function helps us to reduce everything down to a single value, again, via a provided function. 

```python 
from functools import reduce

numbers = [1, 2, 3]
sum = reduce(lambda num, preNum: num+preNum, numbers)
sum # 6
```
The package functools is available by default. 

### filter 
This function does what its name suggests. The passed function needs to return True or False, in order to filter the values from the list. 

```python
numbers = [1, 2, 3, 4, 5, 6, 7 , 8]
evenNumbers = list(filter(lambda num: num % 2 == 0, numbers))
    
evenNumbers # [2, 4, 6, 8]
```