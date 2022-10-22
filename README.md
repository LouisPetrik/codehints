# Louis' Programming Cheatsheets - codehints.netlify.app

The data source for [codehints.netlify.app](https://codehints.netlify.app)

# Table of Contents 

- [Introduction](https://github.com/LouisPetrik/codehints#louis-programming-cheatsheets---codehintsnetlifyapp)
- [Table of Contents for the Cheatsheets](https://github.com/LouisPetrik/codehints#cheatsheets-table-of-contents)
- [Contributing](https://github.com/LouisPetrik/codehints#contributing)
- [Todos](https://github.com/LouisPetrik/codehints#todos)

# Cheatsheets Table of Contents 
The links do not work by now. 

## C++ 


master -> main/docs


- [Variables and Data Types](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/variables-data-types.md)
- [Functions](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/functions.md)
- [Arrays](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/arrays.md)
- [Dynamic arrays (vectors)](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/vectors.md)
- [Stack, Heap and Static Memory](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/heap-stack-memory.md)
- [Pointers](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/pointers.md)
- [References](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/references.md)
- [Classes](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/classes.md)
- [Structs](https://github.com/LouisPetrik/codehints/blob/main/docs/cpp/structures.md)



## Go

-  [Hello World](https://github.com/LouisPetrik/codehints/blob/main/docs/go/getting-started.md)
-  [Variables](https://github.com/LouisPetrik/codehints/blob/main/docs/go/variables.md)
-  [Functions](https://github.com/LouisPetrik/codehints/blob/main/docs/go/functions.md)
-  [For-Loop](https://github.com/LouisPetrik/codehints/blob/main/docs/go/loops.md)
-  [Conditionals](https://github.com/LouisPetrik/codehints/blob/main/docs/go/conditionals.md)
-  [Concurrency](https://github.com/LouisPetrik/codehints/blob/main/docs/go/concurrency.md)
-  [Arrays and Slices](https://github.com/LouisPetrik/codehints/blob/main/docs/go/arrays-slices.md)


## Haskell 
- [GHCI & Hello World!](https://github.com/LouisPetrik/codehints/blob/main/docs/haskell/ghci.md)
- [Data types](https://github.com/LouisPetrik/codehints/blob/main/docs/haskell/data-types.md)
- [Functions](https://github.com/LouisPetrik/codehints/blob/main/docs/haskell/functions.md)
- [Bindings](https://github.com/LouisPetrik/codehints/blob/main/docs/haskell/bindings.md)
- [Lists](https://github.com/LouisPetrik/codehints/blob/main/docs/haskell/lists.md)
- [Typeclasses](https://github.com/LouisPetrik/codehints/blob/main/docs/haskell/typeclasses.md)
- [In and output](https://github.com/LouisPetrik/codehints/blob/main/docs/haskell/IO.md)


## PureScript 
- [Getting started, tools & the REPL](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/getting-started.md)
- [Types](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/types.md)
- [Functions](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/functions.md)
- [Bindings](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/bindings.md)
- [Custom types](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/custom-types.md)
- [IO](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/IO.md)
- [Records](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/records.md)
- [Conditionals](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/conditionals.md)
- [Pattern matching](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/patttern-matching.md)
- [Map, Reduce and Filter](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/map-reduce-filter.md)
- [Arrays](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/arrays.md)
- [Folds](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/folds.md)
- [Standard Library](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/standard-lib.md)
- [Lists](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/lists.md)
- [Typeclasses](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/typeclasses.md)
- [Interaction with JavaScript](https://github.com/LouisPetrik/codehints/blob/main/docs/purescript/js-interaction.md)


## WebAssembly 
- [Text Format](https://github.com/LouisPetrik/codehints/blob/main/docs/webassembly/wat.md)


# Contributing 

Contributing is possible via GitHub. Alternatively, you can send in content, content-drafts or content-ideas 
via Mail: louispetrik@aol.com. 


## Style Guidelines
The following are Guidelines to myself and others for adding contnet. 

Each Markdown file has a header section on top which will be rendered to <head></head>. 
Therefore it holds the title, the description etc. 

Make sure each file at leasts holds a minimal header with a title: 
```markdown
---
title: The title
---

Each technology has one intro.md in its directory. This file always has 
a header like this: 

```markdown 
--- 
title: Introduction to Technology-name 
sidebar_position: 1
slug: /category/technology-name
--- 
```

Each of the files has the h1 headings: 
- What is technology-name? (use cases, projects etc. )
- Code examples (optional)
- Author's Notes (optional)
- Sources 
- Additional Ressources 

Please do not use uncloses XML tags anywhere as this will 
break anything. Thank you.



# Todos 

## Content

- Interfaces in C++ 
- Filling out AssemblyScript and TypeScript
- Basics of C 
- Bun Cheatsheet 
- "Cheatsheet" -> "Cheat sheets" 
- Make links in Repo README work 

## Technical 

- Make search bar results more specific (Maybe rename all "Arrays" to "Arrays in C++" for example)
- Preview image when sharing via WhatsApp, Twitter etc. 
- 