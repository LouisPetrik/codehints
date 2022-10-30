---
title: Getting started with AssemblyScript
sidebar_position: 2
---

# Getting started with AssemblyScript

AssemblyScript runs completely on the Node.js environment, so make sure you have Node installed (ideally on of the latest version, as it has to support WebAssembly).
Once you have Node available on your machine, you can get started.

## Creating a new project

```bash
npm init
npm install --save-dev assemblyscript
npx asinit .
```

Make sure to install npx before:

```bash
npm install -g npx
```

## Structure of your project

AssemblyScript generates a bunch of files and directories out of the box.
Within the directory <code>assembly</code> there is your TypeScript code, which will be compiled
to webassembly. Also inside of this directory, there is the file <code>tsconfig.json</code>.
This file is all for configuring TypeScript.

<code>build</code> holds the compiled WebAssembly modules.

## Running the module

```bash
npm run asbuild
```
