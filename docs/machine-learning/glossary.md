---
title: Machine Learning Glossary
sidebar_position: 2
slug: /machine-learning/glossary
---

Engaging in Machine Learning often gets you overwhelmed at first. There are a ton of different terms, discribing functions, algorithms, mathematical objects, procedures and so on and so forth. 

The following glossary compiles some of the most important terms in machine learning. 
You will find algorithms, mathematical objects, programming tools and more. All the terms stem my university courses on machine learning. Grasping the terms and their meanings at first helped me see the bigger picture. 


Often, code examples are provided, mostly in <a href="/category/python" target="_blank">Python</a>, using libaries like <a href="/python/numpy" target="_blank">Numpy</a> and Sckit learn. 


## A 


## B 


## C 

### Choleksy

## D


### Derivate

### Determinant 

### Distance 

Mostly the distance of two vectors / points in a two or three dimensional space (or higher).

## E 

### Euclidean distance 

A distance measure for vectors of n dimensions. Often used for the k-nearest neighbour algorithm. 

$d\colon(a,b)=\sqrt{(p_1-q_1)^2 + (p_2-q_2)^2 + ... + (p_i-q_i)^2 + ... + (p_n-q_n)^2}$ 

<b>Code example:</b> 

```python
from sklearn.metrics.pairwise import euclidean_distances

euclidean_distances([[0, 1], [1, 1]], [[0, 0]])
# array([[1.],[1.41421356]])
```

## G 

### Gradient 


### Gradient descent 


### Gaussian 


### Gated graph sequence neural network 


### Grid search 

## H 

### Hessian 

### Hyperparameter 

## K 

### k-means 


### k-nearest-neighbor 


## L 

### Lasso 
A algorithm for regularization


### Lineare Regression 

## M

### Matrix 

### Maximum 

### Minimum 




## N 

### Neural network 

### Normalization

### Numpy

A Python library for scientific programming, known for high performance. 

## O 

### One hot encoding


### Overfitting 

## P

### Python 
The most popular programming language for machine learning 

## R 

### Regularization 


### Ridge regression 


## S

### Splitting 

The act of splitting means splitting the whole data set into two sets: One for training the ML model, one for testing the model. 

<b>Code example:</b> Splitting data 80/20 with Scikit learn: 

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = 
  train_test_split(X, y, test_size=0.2, random_state=69)
```

Keep in mind the data is not necessarily normalized yet. 

### Stepsize backtracking 

### Stochastic gradient descent 

## T 

## U 

### Underfitting 

## V

### Vector 


## W 

### Weight 

A weight or multiple weights can be applied to parameters in different ML models to regularize their impact. 