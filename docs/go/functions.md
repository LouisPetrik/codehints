---
title: Functions in Go 
---

# Functions

Since Go is a compiled language, we can write the function that should be executed, after the calling function. No problem.

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