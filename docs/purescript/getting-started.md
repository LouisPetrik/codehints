---
sidebar_position: 2
title: Getting Started with PureScript 
---

# Getting started
Giving PureScript a try isn't too much of an afford. As PureScript completely runs on top of Node.js, all we need to do is installing the 
related NPM packages. Once it is installed, we can bootstrap a new project. Finally, we can compile to code to JavaScript. All of this happens on the basis of Node.js. 

Installing PureScript on your machine:

```bash
npm install -g purescript
npm install -g spago
```

Creating a new project:
(Make sure to first create an empty directory, spago will set up in the current dir)

```bash
spago init
```

Running:

```bash
spago run
```

Building for the web:

```bash
spago bundle-app
```

## Getting started the recommended way

This way avoids a global installation of PureScript to ensure working with multiple projects in different versions.

(Make sure to first create an empty directory, spago will set up in the current dir)

```bash
npm init -y

npm install --save-dev spago purescript

# to check whether installation works:
npx spago version
```

As you can see, using NPM like this only installs Spago and PureScript locally, for development - bound to your project.

Then, using NPX you can initialise the PureScript project just like before:

```bash
npx spago init

npx spago run

npx spago run
```

You can start the REPL with "spago repl".

You can import any module from the src-directory with: "import Module"
For example, "import Main".

From now on, you can access data written in the file in the REPL.
Whenever you change something in the file, make sure to reload the REPL:
":reload".

To quit: ":quit".

Getting the type of some data: ":type data"

## Great ressources for PureScript

-  [The official PureScript book](https://book.purescript.org/)
-  [Jordan's notes](https://jordanmartinez.github.io/purescript-jordans-reference-site/Preface.html)
-  [Pursuit](https://pursuit.purescript.org/)
-  [Functional Programming Made Easier - Book. There is a free sample which is awesome](https://leanpub.com/fp-made-easier) 

The FP made easier book also serves as the original source of knowledge for this cheatsheet. 