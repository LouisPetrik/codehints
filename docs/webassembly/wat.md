---
title: The WebAssembly Text Format 
---

# WebAssembly Text Format (WAT)

WA offers a notation which can be used to write human-readable code, compiled to WASM. 
This so called WebAssembly Text Format looks a little similar to Assembler, which you might have seen before. 

## Installing needed tools

For compiling your WAT code to WASM, I recommend using wat2wasm.

Installing with NPM: npm install -g wat-wasm 
Installing it with brew: brew install wabt 

Alternatively, check out: https://github.com/webassembly/wabt

## Writing a small program with WAT

```wat
(module
  (func (export "sum")
    (param $a i32)
    (param $b i32)
    (result i32)
    local.get $a 
    local.get $b 

    i32.add 
  )
)
```


Compiling it: 

wat2wasm add.wat -o add.wasm 

### Running it with node.js
 
Now, we can load this file in Node.js and use the function: 

```javascript
const fs = require('fs')
const bytes = fs.readFileSync(__dirname + '/add.wasm')

(async () => {
  const obj = await WebAssembly.instantiate(new Uint8Array(bytes))

  let value = obj.instance.exports.sum(7, 5)
  console.log(value)
})()
```

node index.js should log "12" now. 

### Running it in the browser 

All you have to do, is to write the following JavaScript code and use it in the browser, so embed it in your HTML or you the <script src=""></script>. 

```javascript
fetch('add.wasm')
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes))
  .then((response) => {
    let result = response.instance.exports.sum(7, 5)
    console.log(result)
  })
```

## Understanding the stack machine 

```wat
(module
  (func (param i32) (param i32) (result i32)
    local.get 0
    local.get 1
    i32.add 
  )
)
```
We can access the parameters via index or via name. 
via index would look like this: local.get 0 and local.get 1. 

Getting them via name is shown in the first code example. 

The add-function takes the top-2 elements, removes them from the stack and push the result on the stack. 
## Writing comments 

```wat
;; This is a single line comment 

(; Multiline
Comment ;)
```

## Data types 

For now, there are integers and floats, defined by the size in memory: 
i32, i64, f32, f64 