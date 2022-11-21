---
title: Lists in ReScript 
--- 

# Lists in ReScript

When speaking about "lists" in the context of ReScript, linked lists are meant.
But how do they differ to arrays? First of all, linked lists consists of elements, linked to each other. 
Each element has a head (its value) and a tail, which is in fact just another element. As you can tell, each element
therefore holds another element and so on. 

Another difference to arrays are the strenghts and weaknesses of linked lists. While you often can replace arrays with linked lists easily, 
you shouldn't always to. Both have different advantages. 

- Linked lists are fast at insertion and deletion of elements 
- This also includes adding linked lists to each other 
- Fast at getting the first element 
- Slow in searching and almost everything else 
- Also, linked lists are immutable 

Here is a quick example for understanding the structure of a linked list: 

```rescript
let names = list{"Max", "Tom", "John"}
```

Compiles to the following JS: 

```javascript
var names = {
  hd: "Max",
  tl: {
    hd: "Tom",
    tl: {
      hd: "John",
      tl: 0
    }
  }
};
```

## Accessing elements 

Accessing elements of a linked lists is not done via an index, but with the head and tail of the list. 


```rescript
let names = list{"Max", "Tom", "John"}

let head = Belt.List.head(names)

Js.log(head) // Max
```

From now on, we are going to use inline lists, instead of 
creating a new variable for holding a list. 

Getting the tail of the list also works over a function. Yet, the tail is not the last element, but 
everything in the list, which is not the element on a higher level. 

```rescript
open Belt

Js.log(List.tail(list{1, 2, 3}))
// { hd: 2, tl: { hd: 3, tl: 0 } }
```

## Converting an array to a list 

```rescript
open Belt 

let numbers = [1, 2, 3]
let numbersList = List.fromArray(numbers)
```

## map, reduce and filter 

The three horseman of functional programming also found their place in ReScript. 
Map maps values from x onto y, reduce reduces a list of x to a single value y and filter 
filters out elements not matching a criterion. 

### map 

```rescript
open Belt

let numbers = list{1, 2, 3}

let timesTwo = numbers->List.map(x => x * 2)
```

### reduce 

