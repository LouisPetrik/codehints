---
title: Compiling to WebAssembly with Go 
--- 

# WebAssembly with Go 


First, create a new directory and navigate into it. Then, create a new file called `main.go` and add the following code to it. 
Run `go mod init wasm` to create a new module. 




The code: 

```go 
package main

import (
	"syscall/js"
)

func main() {
	js.Global().Set("sayHello", js.FuncOf(sayHello))
	select {}
}

func sayHello(this js.Value, args []js.Value) interface{} {
	return "Hello, " + args[0].String() + "!"
}
````


Next, you need to copy the `wasm_exec.js` file from the Go installation directory to your project directory. You can find the file in the `misc/wasm` directory of the Go installation. 

```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
```


Finally, set up your `index.html` file to load the WebAssembly module. 

```html
<html>
  <head>
    <meta charset="utf-8" />
    <script src="wasm_exec.js"></script>
    <script>
      const go = new Go()
      WebAssembly.instantiateStreaming(
        fetch('main.wasm'),
        go.importObject
      ).then((result) => {
        go.run(result.instance)
      })
    </script>
  </head>
  <body></body>
</html>

```

Now, you can run the following command to compile the Go code to WebAssembly. 

```bash
GOOS=js GOARCH=wasm go build -o main.wasm
```

This will create a `main.wasm` file in your project directory.

Run a local server to serve the `index.html` file. e.g. use "serve": 
  
  ```bash
  npm install -g serve
  serve . 
  ```


Last but not least, you can execute the defined function in the `main.go` file from the browser console. 

```javascript
sayHello("WebAssembly")
```

And you should see the following output in your browser console: 

```
Hello, WebAssembly!
```

