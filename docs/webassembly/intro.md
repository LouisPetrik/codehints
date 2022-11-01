---
title: Introduction to WebAssembly
sidebar_position: 1
slug: /category/webassembly
---

# What is WebAssembly?

WebAssembly is a binary instruction format like Assembler, running as a stack-based virtual machine in the world of JavaScript.
WebAssembly enables us to generate extremely fast code based on programming languages like C, C++, Go or Rust for the browser
and anywhere else.

Compiled WebAssembly code can be run within the browser or Node.js. Therefore client and server can profit from WebAssembly's performnace boost. Yet, WebAssembly

## Projects using WebAssembly

**Stockfish**, the strong chess engine is ported in WebAssembly using C++. The engine is used on chess-related websites like Lichess and runs both in the browser and backend.

**Figma** is a software for drafting UIs in collaboration, entirely in the browser. WebAssembly is used to accelerate calcuations, needed for the rendering.

**PyScript** is a Python interpreter and environment for the browser. It was written entirely in WebAssembly and enables developers to use libraries like Numpy in the browser.

## Author's Notes

The good thing about WASM is you can choose your entry-point. A lot of modern programming languages can be compiled to WebAssembyl, no matter if you use Go, Rust, C++ or even TypeScript.

## Sources

As the source for the WAT-introduction especially, the Mozilla documentation is used - linked below.

## Additional Ressources

-  [Mozilla on WAT](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format)
