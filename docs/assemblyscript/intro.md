---
title: Introduction to AssemblyScript
sidebar_position: 1
slug: /category/assemblyscript
---

<img src="https://raw.githubusercontent.com/AssemblyScript/assemblyscript/78b2d1afef01995c476b6fcb1647258053a0b193/media/icon.svg" alt="PureScript" width="192"/>


<br/>
<br/>


AsssemblyScript, in short, ASM, is a programming language that compiles to WebAssembly - only to WebAssembly.
The language is based on TypeScript, but with three huge differences:

-  ASM forces you to provide types, and "any" is not allowed
-  ASM brings in C-style types like 32 bit and 64 bit Integers
-  ASM offers a standard library with low-level functions

At the moment, it is a great choice when you are in the need for fast WASM code, yet want to write something like JavaScript. Compared to writing <a href="/webassembly/wat">WebAssembly Text Format</a> yourself (basically like Assembler), ASM is way friendlier for developers. 

## Author's Notes

Already used in production, yet some essential features like closures are missing.

## Sources

As the source, the official documentation is used.

## Additional Ressources

-  [AssemblyScript.org](https://www.assemblyscript.org/introduction.html)

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
` 

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is AssemblyScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AssemblyScript is a subset of TypeScript (a superset of JavaScript) that compiles to WebAssembly. It's an open-source project that allows developers to write strictly typed TypeScript code and compile it to a binary format that runs at near-native speed in the browser."
    }
  }, {
    "@type": "Question",
    "name": "How is AssemblyScript different from TypeScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "While AssemblyScript is a subset of TypeScript, the key difference lies in the target platform. TypeScript is typically transpiled to JavaScript and run on a JavaScript engine, while AssemblyScript is compiled to WebAssembly and run in a WebAssembly engine. This can result in performance benefits for specific use cases such as complex calculations, graphical rendering, and more."
    }
  }, {
    "@type": "Question",
    "name": "What is WebAssembly?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "WebAssembly (often abbreviated as Wasm) is a binary instruction format for a stack-based virtual machine. It is designed as a portable target for the compilation of high-level languages like C++, C, Rust, and now AssemblyScript, enabling deployment on the web for client and server applications."
    }
  }, {
    "@type": "Question",
    "name": "How can I start with AssemblyScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To start with AssemblyScript, you should have Node.js and npm installed. Then, install AssemblyScript's compiler by running 'npm install --save-dev AssemblyScript/assemblyscript'. Create a '.ts' file for your TypeScript code, then compile it to WebAssembly using the 'asc' command. You can learn more from the AssemblyScript's documentation or its GitHub page."
    }
  }, {
    "@type": "Question",
    "name": "Where can I use AssemblyScript?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AssemblyScript can be used wherever WebAssembly is supported. This includes modern web browsers (Firefox, Chrome, Safari, Edge) and Node.js environments. It is particularly useful for applications requiring performance optimization and for leveraging multithreaded web technologies."
    }
  }]
}


`}}></script>