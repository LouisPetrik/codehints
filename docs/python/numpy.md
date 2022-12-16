---
title: Numpy cheat sheet
sidebar_position: 20
---


# Numpy cheat sheet 

Numpy is a Python library for working with arrays and matrices. Selling point of the library is its high performance, as Numpy is based on C. 
Let's go over the most important features of Numpy. 

But first, we have to install Numpy. 
```bash
pip install numpy
```
Then, you can import it and use it in your Python project: 

```python
import numpy as np
```

Of course you can import Numpy "as" everything you want, but the standard is to import it as np. 
Therefore, calling Numpy functions works with <i></i>np.function. 

## Arrays 

Arrays can be created and manipulated like the <a href="/python/lists">default lists</a> in Python. 

```python
arr = np.array([1, 2, 3])

arr[0] # 1 
```

Also, lists can be transformed to Numpy arrays: 

```python
numbers = [1, 2, 3]
arr = np.asarray(numbers)
```



### Creating filled arrays 

Numpy holds different functions for creating arrays of a given shape, filled with the same value. 

```python
np.ones(5)
# array([1., 1., 1., 1., 1.])
```
<code>np.ones</code> creates an array filled with ones, of size 5. The shape is by default one-dimensional. 
For non-one-dimensional arrays, you need to pass one more pair of brackets like this: 

```python
np.ones((3, 3))
```
Which creates a 3 x 3 array, filled with ones. 

instead of <code>.ones</code> , one can also use <code>.zeros</code> for filling the array with zeros. 

## Mathematical functions 

### Sinus, cosinus, tangens 
All of these functions work element-wise, we pass an array of values and receive the function results. 

```python
np.sin([1, 2, 3])
# array([0.84147098, 0.90929743, 0.14112001])
```

For the cosinus and tangens, use <code>np.cos</code>, <code>np.tan</code>, <code>np.arcsin</code> and so on. 


### Sums 

With <code>np.sum</code> one can sum up the values of an array-like structure. 

```python
numbers = [1, 2, 3]
np.sum(numbers)
# 6
```