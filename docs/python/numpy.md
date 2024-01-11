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



## Array Iteration

Array iteration in Numpy allows you to perform operations on array elements. You can iterate over elements, rows, and columns, and use efficient iteration tools like `nditer`.

### Iterating Over Elements
You can iterate over each element in a Numpy array using a simple for loop.
```python
import numpy as np
arr = np.array([1, 2, 3])
for x in arr:
  print(x)
```

### Iterating Over Rows and Columns
For 2D arrays, nested loops are used to iterate through rows and columns.
```python
arr = np.array([[1, 2], [3, 4]])
for row in arr:
  for x in row:
    print(x)
```

### Using nditer for Efficient Iteration
`nditer` provides a flexible way to iterate over an array.
```python
arr = np.array([[1, 2], [3, 4]])
for x in np.nditer(arr):
  print(x)
```

## Linear Algebra

Numpy provides a range of functions for linear algebra operations.

### Matrix Multiplication
```python
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])
result = np.dot(a, b)
```

### Determinants and Inverses
You can find the determinant and inverse of a matrix.
```python
matrix = np.array([[1, 2], [3, 4]])
det = np.linalg.det(matrix)
inv = np.linalg.inv(matrix)
```

### Eigenvalues and Eigenvectors
Numpy allows you to compute eigenvalues and eigenvectors of a matrix.
```python
matrix = np.array([[1, 2], [3, 4]])
eigenvalues, eigenvectors = np.linalg.eig(matrix)
```

## Statistics

Numpy offers various statistical functions.

### Basic Statistical Operations
```python
arr = np.array([1, 2, 3, 4, 5])
std_dev = np.std(arr)
variance = np.var(arr)
median = np.median(arr)
```

### Sorting Arrays
```python
arr = np.array([3, 1, 5, 2])
sorted_arr = np.sort(arr)
```

## File I/O

Numpy supports various file formats for saving and loading data.

### Saving and Loading Arrays
```python
arr = np.array([1, 2, 3, 4, 5])
np.save('my_array', arr)
loaded_arr = np.load('my_array.npy')
```

### Supported File Formats
Numpy supports file formats like `.npy` and `.npz` for efficient storage and retrieval of array data.

## Randomness

Numpy's random module can be used for generating random numbers and arrays.

### Generating Random Numbers and Arrays
```python
random_arr = np.random.rand(4)
```

### Setting Seed for Reproducibility
```python
np.random.seed(0)
```

This cheat sheet provides a quick overview of some of the most essential aspects of Numpy for programmers. As you delve deeper into Numpy, you'll discover a plethora of functions and features that make Python an excellent choice for scientific computing.

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