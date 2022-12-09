---
title: Functions in Go 
---

# Functions in Go 

Since Go is a compiled language, we can write the function that should be executed, after the calling function. No problem. Functions are not forced to return anything. The function you will see the most is the <code>main</code> function. Its name is a reserved keyword and it can therefore only exist once in your project. 

```go
func main() {
   greet()
}

func greet() {}
```

For the return-statement, we MUST define a datatype.

```go
func greet() string {
   return "Hi max"
}
```

## Function parameters 

Special about Go's functions is that the data type is provided after the parameter name. This is different in 
languages like Java and C++. 

```go 
func multiply(x int, y int) int {
	return x * y
}

func main() {
	fmt.Println(multiply(2, 5)) // 10 
}
```

### More compact parameters 

There is a shorthand which can be used when the parameters have the same data type. 

```go 
func multiply(x, y int) int {
	return x * y
}
```

## Returning values 
In the example above, you can see how to return a simple value. But there is more to this feature in Go. 
A function can return more than one value. The values can then be destructured and saved to single variables, for example. 

```go 
func person() (string, int) {
	name := "Max"
	age := 22
	return name, age
}

func main() {
	name, age := person()
	fmt.Println(name, age)
}
```

Keep in mind you need to provide both data types: <code>(string, int)</code>. 


## Anonymous functions 

Anonymous functions are also known as lambdas. 
In Go, we can assign them to variables, just like in JavaScript. 

```go
var add = func(a, b int) int {
	return a + b
}

func main() {
	fmt.Println(add(2, 3)) // 5 
}
```

Anonymous functions work like normal functions, but one doesn't provide a name for them. 

## Calling Functions from other files

main.go:

```go
package main

import "fmt"

func main() {
   greet()
}
```

person.go:

```go
package main

import "fmt"

func greet() {
   fmt.Println("Hey Max")
}
```

Both need to have the package main. The trick is now, to run both files, leading to main.go can access what is inside of person.go

```bash
go run main.go person.go

go build main.go person.go
```