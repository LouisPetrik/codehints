--- 
title: tsconfig.json
---

<head>
<title>Understanding TypeScript's tsconfig.json</title>
</head>


The <code>tsconfig.json</code> file in TypeScript allows you to specify the root level files and the compiler options that you require to compile your project. By configuring <code>tsconfig.json</code>, you can control how your TypeScript project behaves, making it easier to work with complex codebases.

## Basic Configuration

### target

The <code>target</code> option in the TypeScript configuration specifies the ECMAScript target version. The compiler will output code to run on this ECMAScript version.

```json
{
  "compilerOptions": {
    "target": "es5"
  }
}
```

In the above snippet, the <code>target</code> is set to <code>es5</code>. The TypeScript compiler will thus produce JavaScript compatible with ECMAScript 5.

### module

The <code>module</code> option determines the module code generation method.

```json
{
  "compilerOptions": {
    "module": "commonjs"
  }
}
```

Here, the compiler will generate modules following the CommonJS pattern, suitable for usage in Node.js applications.

### outDir

The <code>outDir</code> option tells TypeScript to put the compiled files into a specified directory.

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

This tells TypeScript to put all compiled JavaScript files in a directory named <code>dist</code>.

### rootDir

The <code>rootDir</code> option informs the compiler where the root directory of the source files is located.

```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

In this example, all TypeScript source files are located in the <code>src</code> directory.

### strict

The <code>strict</code> option enables a wide range of type checking behavior to ensure that you catch more bugs upfront.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Enabling this option turns on a suite of strictness checks in the TypeScript compiler, providing enhanced <a href="/typescript/data-types">type</a> safety.

## Compiler Options

### lib

The <code>lib</code> option specifies library files to be included in the compilation. It allows developers to choose JavaScript language features they can use based on their target environments.

```json
{
  "compilerOptions": {
    "lib": ["es6", "dom"]
  }
}
```

The code above will only include typings for ECMAScript 6 and DOM APIs.

### jsx

The <code>jsx</code> option provides support for JSX syntax, a syntax extension for JavaScript commonly used with React.

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

This configuration allows using JSX syntax in TypeScript files and emits React-compatible JavaScript code.

### sourceMap

The <code>sourceMap</code> option generates corresponding <code>.map</code> files along with the compiled JavaScript files.

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

By setting this to true, source map files are generated to aid debugging by linking the generated JavaScript code back to the original TypeScript source.

### declaration

The <code>declaration</code> option tells TypeScript to generate corresponding <code>.d.ts</code> files along with the compiled JavaScript files.

```json
{
  "compilerOptions": {
    "declaration": true
  }
}
```

This helps in publishing your types if you are creating a library, or working in a project where types are important.

## Module Resolution

### baseUrl

The <code>baseUrl</code> option is used to resolve non-relative module names.

```json
{
  "compilerOptions": {
    "baseUrl": "./"
  }
}
```

Setting <code>baseUrl</code> to <code>./</code> tells TypeScript to start module resolution from the current directory.

### paths

The <code>paths</code> option, used in tandem with <code>baseUrl</code>, allows you to set up custom paths to your modules.

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "*": ["src/*"]
    }
  }
}
```

In this configuration, all modules are resolved relative to the <code>src</code> directory.

### esModuleInterop

The <code>esModuleInterop</code> option allows default imports from modules with no default export.

```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

This is to support interoperability between CommonJS and ES Modules.

## Using tsconfig in Tools

### Visual Studio Code

Visual Studio Code uses the TypeScript configuration file to provide a consistent development environment. This includes features such as IntelliSense, refactoring tools, and type checking. 

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "jsx": "react"
  }
}
```

In the above configuration, Visual Studio Code would leverage these settings to provide code completion, warnings, and refactorings.

### TypeScript CLI

The TypeScript command line interface (CLI) uses <code>tsconfig.json</code> for its configuration. You can compile TypeScript using the `tsc` command.

```bash
tsc --project ./tsconfig.json
```

With the `--project` flag, the CLI knows to use your <code>tsconfig.json</code> for its configuration when compiling your TypeScript code. This helps to ensure consistency in your project and to enforce the standards you've defined.
