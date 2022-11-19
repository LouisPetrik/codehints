---
title: Lists in ReScript 
--- 

# Lists in ReScript

When speaking about "lists" in the context of ReScript, linked lists are meant. 

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