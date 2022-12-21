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

### Accuracy 

A measure for the accuracy of a classification model. In easy words, the amount of predictions the model got correctly. 

<b>Code example:</b>

```python
from sklearn.metrics import accuracy_score

y_pred = [0, 2, 1, 3]
y_true = [0, 1, 2, 3]

accuracy_score(y_true, y_pred)
```


### Activation function 

A function that determines the degree of activeness of a single neuron in a neural network. 
While biological neurons are inactive or active, artifical neurons are in a range between 0 and 1. 

A commonly used activation function is the <a href="/machine-learning/glossary#relu">ReLU</a>. 

<a href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html" target="_blank">Source</a>

## B 

### Bias 

### Beta 

Often used variable of the single coefficients in a mathematical function.

## C 

### Choleksy

### Classification

Task for a machine learning model, which is about classifing data into given categories. The most famous example might be the iris dataset, containing information about 
different types of a flower. Through classification, the model can predict to which type of the flower species the test data belongs. 

### Convex 

A function, that has only one global minimum. Only valid type for some regression models, as some are unable to deal with multiple minima. 

### Cosine 

Distance function. 

```python
from scipy.spatial import distance 

distance.cosine([1, 2], [1, 2])
# 0
```
Returns 0 as the vectors are identical. 

Also check out the Cityblock distance and the Euclidean distance. 

### Cityblock 
Another name for the Manhattan / Taxicab metric.  

```python
from scipy.spatial import distance 

distance.cityblock([1, 2], [1, 5])
# 3
```

## D

### Deep learning 

A subset of neural network applications in which 3 or more layers are used. 

### Derivate

The derivate of a function is its rate of change. Therefore, we can use it to find the slope of a function at a certain point, or the minimum and maximum of it. 

<b>Code example using SymPy:</b>

```python
from sympy import diff, Symbol

x = Symbol("x")
func = 2 * x + 2

diff(func, x) # 2
```

Outputs $2$ as it is the derivate of $f\colon(x)={2x +2}$



### Determinant 

```python
import numpy as np

A = np.array([[1,2], [2,3]])  

np.linalg.det(A)
# -1
```

### Distance 

Mostly the distance of two vectors / points in a two or three dimensional space (or higher).
Often used for solving classification problems, as the nearest neigbours of a data point need to be found. 

## E 

### Elastic net 

Regularized regression model, which combines both L1 and L2 penalties. 

### Euclidean distance 

A distance measure for vectors of n dimensions. Often used for the k-nearest neighbour algorithm. 

$d\colon(a,b)=\sqrt{(p_1-q_1)^2 + (p_2-q_2)^2 + ... + (p_i-q_i)^2 + ... + (p_n-q_n)^2}$ 

<b>Code example:</b> 

```python
from scipy.spatial import distance 


x = np.array([1, 3, 4])
y = np.array([2, 4, 1])


distance.euclidean(x, y)
# 3.3166
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


### Learning 

Mostly the process of minizing the cost function of the model. This leads to the predictions being more precise - therefore, the model is learning. 

### Linear discriminant analysis 

A model for regression. 

### Linear Regression 

### Logit

A function used to convert a real number to a probability score (between 0 and 1). 

$logit(p)=\ln{(\frac{p}{1 - p})}$

Alternatives to this function are: 
- Softmax
- Sigmoid
- ReLU 



### Loss function 

The function that describes the differences of the predictions to the actual data. The higher the difference, the less precise is our model. Therefore, the loss function is to be minimized. 

## M


### Manhattan distance 

Also known as Taxicab or Cityblock distance, is a metric which can be thought of like the route a taxi driver has to take. While he can't drive through a building, he has to take (the shortest) a path around it.  

<b>Code example with SciPy:</b>

```python 
from scipy.spatial import distance 


x = np.array([1, 3, 4])
y = np.array([2, 4, 1])


distance.cityblock(x, y) # 5
```

You can calculate the result for yourself like this: 
|1 - 2| + |3 - 4| + |4 - 1| = 1 + 1 + 3 = 5 
 
### Matrix 

### Maximum 

### Minimum 


## I 

### Iris

Famous dataset for testing classifaction models. 

## N 

### Neural network 


### Neuron 

Neurons are the building blocks of neural networks. Most neural networks consist of thousands of Neurons, sometimes even more. 
One can imagine a neuron like a biological neuron - yet, the machine learning implemention is a function underneath. The neuron has a state of activeness, which can 
lead to triggering other neurons. A single neuron or multiple ones can solve different sub tasks in an application.  

In image recognition, there can be neurons focusing on the background, on the shape, on the color and so on. 

### Normalization

The process of scaling data for training a model (sometimes even for testing). 

<b>Code example with Numpy:</b>

```python
import numpy as np 

X_train = (np.array(X_train) - np.mean(X_train, axis = 0).ravel())\
/(np.std(X_train,axis = 0).ravel())

X_test = (np.array(X_test) - np.mean(X_test, axis = 0).ravel())\
/(np.std(X_test,axis = 0).ravel())
```

### Numpy

A Python library for scientific programming, known for high performance. 
For more, checkout the <a href="/python/numpy">cheatsheet on Numpy</a>

## O 

### Ordinal 

### One hot encoding


### Overfitting 

A model that adapts to much to the data can be called overfitting. 
A great example is image classification. Imagine you provide your model with many pictures of dogs. Yet, the overwhelming number of images
are of a single dog breed. Therefore, the model adapts to this specific breed and its characteristics and is now likely unable to identify other breeds as dogs in general. 
The model is overfitting. Of course, providing a strongly biased set of images must be avoided - but even slight biases can lead to overfitting. 


## P

### Python 
The most popular programming language for machine learning 

## R 

### Regularization 

### ReLU
ReLU stands for rectifier linear unit. It is used as an activation function in neural networks, as it maps real numbers onto the range 0 to 1. 
The definition is quite easy, it simply returns the maximum of (0, x), so x for any x > 0. 

$RELU(x)={\max(0, x)}$ 

As it maps onto 0 - 1, it does quite the same as Softmax, Logit and Sigmoid. 


### Risidual sum of squares 

A measure of the variance in a regression model. 

### Root mean squared error 
In short RMSE, is the squared difference of predicted values and the actual values. The actual values mostly describe the test data, while we 
provided the model for learning with the train dataset. The lower the RMSE, the more precise is our model. 

### Ridge regression 

## S

### Shrinkage 

### Sigmoid 

A function, that renders the famous S-shaped curve, also known as sigmoid curve. 
This function maps a real number onto the range 0 to 1, and is therefore often used as a wrapper to receive a probability score. 

$S(x)=\frac{1}{1 + e^{-x}}$ 

Or: $S(x)={1 - S(-x)}$ 


Alternatively, functions like Softmax, Logit and ReLU can be used. 
Especially ReLU is today more often used than Sigmoid. 

### Slope

### Splitting 

The act of splitting means splitting the whole data set into two sets: One for training the ML model, one for testing the model. 

<b>Code example:</b> Splitting data 80/20 with Scikit learn: 

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = 
  train_test_split(X, y, test_size=0.2, random_state=69)
```

Keep in mind the data is not necessarily normalized yet. 

## Supervised learning 

A subset of machine learning tasks in which the algorithm is provided with labeled data - the model knows the correct output.  
Supervised learning is most classification and regression. 

### Stepsize backtracking 

### Stochastic gradient descent 

## T 


### Taxicab distance 

Another word for the <a href="#manhattan-distance">Manhattan distance</a>. 

### Theta 

## U 

### Underfitting 

### Unsupervised learning

A subset of machine learning tasks, which are not about predictions. Therefore, the algorithm is not provided with labels and human interaction isn't necessary. 

## V

### Vector 


## W 

### Weight 

A weight or multiple weights can be applied to parameters in different ML models to regularize their impact. 