---
title: Belt, the ReScript Standard Library 
--- 

# Belt, the ReScript Standard Library 

ReScript's standard library is named Belt. All the entities are of course available by default, 
but you can import it, to shorten calling the objects. The library mostly resolves around ReScript's types and all of their functions. 
For example, Belt holds utilities for linked lists, arrays, sets, dictionaries and so on. 

In case you want to shorten calling objects from the library, import it: 

```rescript
open Belt

List.head(list{1,2,3})
```

Otherwise, you would have to write: 

```rescript
Belt.List.head(list{1, 2, 3})
```


Let's cover the most important functions for all the types, to get a good touch on Belt. 