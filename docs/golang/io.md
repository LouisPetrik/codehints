# fmt package (IO)

fmt is a default package, used for IO. It stands for "format".

```go
fmt.Println()
fmt.Printf()
fmt.Print()
```

Both functions from this package can be used to print something on the console.
Println() does a linebreak after printing, Printf() does not.
Printf() is for formatting strings.

```go
a := 5
b := 10
fmt.Println(a, "Numbers", b) // '5 Numbers 10'
fmt.Printf(a, "Numbers", b)  // error - variables are not a string
```