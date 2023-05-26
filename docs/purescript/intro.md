---
title: Introduction to PureScript
sidebar_position: 1
slug: /category/purescript
---

<img src="https://raw.githubusercontent.com/purescript/purescript/master/logo.png" alt="PureScript" width="392"/>



In the landscape of functional programming languages, PureScript stands as an accessible and practical option. But what exactly is PureScript, and why should you care? Let's break it down.
PureScript is a purely functional programming language created in 2013.
The syntax is almost similar to Haskell, yet, it only compiles to pure JavaScript.

##  What is PureScript? 

###  A Quick Overview 

PureScript is a statically-typed, purely functional programming language. Its syntax and concepts may be familiar to those who have experience with [Haskell](/category/haskell), but it's designed to interoperate nicely with JavaScript's ecosystem. This makes PureScript a great choice for JavaScript developers looking to embrace functional programming. 

###  Benefits of PureScript 

Some key benefits of PureScript include its robust type system and efficient JavaScript output. These make it highly suitable for large-scale, complex web application development where reliability and performance are critical.

##  Hello World in PureScript 

Want to see PureScript in action? Let's set up a simple "Hello, World!" program.

###  Setup 

To get started with PureScript, check out our guide at [/purescript/getting-started](/purescript/getting-started). Once you have your environment ready, type the following code:

```haskell
module Main where
import Effect.Console
main = log "Hello, World!"
```

###  Code Explanation 

The code imports the Effect.Console module, which allows us to output to the console. The 'main' function then logs "Hello, World!" to the console. Simple, right?

##  PureScript’s Use Cases 

###  Web Development 

PureScript's seamless interoperability with JavaScript means it's a natural fit for web development. The language’s strong type safety and functional programming features allow developers to write more reliable and maintainable code. One can easily use PureScript to write code for frameworks like Express.js, Next.js and React. 

###  Data Analysis 

Additionally, the ability to utilize functional programming paradigms makes PureScript a good option for data analysis tasks. Complex operations can be more easily implemented with PureScript's functional style.

##  Why Functional Programming? 

###  Key Features 

Functional programming emphasizes immutability, first-class functions, and expressiveness. This leads to code that's easier to understand, test, and debug.

###  Benefits and Drawbacks 

The benefits of functional programming include more predictable code and easier debugging. However, the steep learning curve and unfamiliar syntax can be potential drawbacks for developers new to this paradigm.

##  PureScript vs. Haskell 

###  Similarities 

PureScript is often compared to Haskell due to their similar syntax and features. Both are statically typed, support type inference, and use pure functions.

###  Differences 

However, there are key differences. PureScript targets JavaScript and is intended for web development, while Haskell is a general-purpose language. PureScript also has more straightforward JavaScript interop capabilities than Haskell.

##  Useful Resources 

Ready to dive deeper into PureScript? Here are some resources to help

 you on your journey:

- [/purescript/getting-started](/purescript/getting-started)
- [/category/haskell](/category/haskell)
- [PureScript's official documentation](https://www.purescript.org)
- [Learn PureScript](https://leanpub.com/learningpurescript)

In conclusion, PureScript offers a robust framework for functional programming within a JavaScript environment. With its strong typing, clear syntax, and efficient output, it stands out as a practical choice for developers looking to incorporate functional programming into their workflow.

### FAQs

1. **What is PureScript?**
PureScript is a statically-typed, purely functional programming language designed to interoperate with the JavaScript ecosystem.

2. **Why use PureScript for web development?**
PureScript's seamless interoperability with JavaScript and strong type safety make it an excellent choice for reliable and maintainable web development.

3. **What is functional programming?**
Functional programming is a programming paradigm that emphasizes immutability, first-class functions, and expressiveness.

4. **How does PureScript compare to Haskell?**
PureScript and Haskell share similar syntax and features, but PureScript is designed for web development and JavaScript interop, whereas Haskell is a general-purpose language.

5. **Where can I learn more about PureScript?**
You can learn more about PureScript from its official documentation, our guides at [/purescript/getting-started](/purescript/getting-started) and [/category/haskell](/category/haskell), and various online resources.




## Additional Ressources

-  [The official PureScript book](https://book.purescript.org/)
-  [Jordan's notes](https://jordanmartinez.github.io/purescript-jordans-reference-site/Preface.html/)
-  [Pursuit](https://pursuit.purescript.org/)
-  [Functional Programming Made Easier - Book. There is a free sample which is awesome](https://leanpub.com/fp-made-easier/)
