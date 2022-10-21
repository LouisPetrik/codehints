# Variables

Go is statically typed. That means, once we chose a datatype, we must keep the value aligned to it.

## short declaring

This works inside of functions

```go
func main() {
   name := "Max"
   fmt.Println(name)
}
```

## var keyword for declaring

```go
var name string = "Max"
var age = 23
// declaring more than one variable:
var name, age = "Max", 23

func main() {
   fmt.Println(name)
   fmt.Println(age)
}
```

It is not needed to provide the datatype when declaring.

## const keyword for declaring

with const constant variables can be declared. It works the same way as var.

To sum up, we can keep in mind, that datatype but also the variable type are optional. Go uses inference to pick the right types.

```go
var name string = "Max"
// just the same in short:
name := "Max"
```

Keep in mind, that "=" is only used for reassining.