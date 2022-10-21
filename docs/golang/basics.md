# Basics


## Overview / Table of contents 

- ### [Go](https://github.com/LouisPetrik/cheatsheet/blob/master/go.md)
- ### [Haskell](https://github.com/LouisPetrik/cheatsheet/blob/master/haskell.md)
- ### [PureScript](https://github.com/LouisPetrik/cheatsheet/blob/master/purescript.md)
- ### [C++](https://github.com/LouisPetrik/cheatsheet/blob/master/cpp.md)
- ### [C](https://github.com/LouisPetrik/cheatsheet/blob/master/c.md)
- ### [TypeScript](https://github.com/LouisPetrik/cheatsheet/blob/master/typescript.md)
- ### [AssemblyScript](https://github.com/LouisPetrik/cheatsheet/blob/master/assemblyscript.md)

## Getting started

### Hello world

#### code - app.go

```go
package main // a package must be defined

import "fmt"

func main() {
  fmt.Println("Hello World!")
}
```

#### executing it

```bash
go run app.go
go build app.go
./app.go
```

## What are packages?

A package is a collection of code. Package = Project = Workspace.
One app means, only one package name.
The package name "main" is used to make executables. When using everything else as a name, the compiler would not spit out an executable file. Everything else are so-called reusables.
Every file with package main, must have a main-function.

## Variables

Go is statically typed. That means, once we chose a datatype, we must keep the value aligned to it.

### short declaring

This works inside of functions

```go
func main() {
   name := "Max"
   fmt.Println(name)
}
```

### var keyword for declaring

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

### const keyword for declaring

with const constant variables can be declared. It works the same way as var.

To sum up, we can keep in mind, that datatype but also the variable type are optional. Go uses inference to pick the right types.

```go
var name string = "Max"
// just the same in short:
name := "Max"
```

Keep in mind, that "=" is only used for reassining.

## Functions

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

### Calling Functions from other files

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

## For Loops

For-Loops are the only loops which can be used in Go.

```go
func main() {
  for i := 0; i <= 3; i++ {
    fmt.Println(i) // 0, 1, 2, 3
  }
}
```

Using an already existing variable: (I did not find a better way, scoping seems to be strange)

```go
i := 0
for i := i; i <= 3; i++ {
   fmt.Println(i)
}
```

## Conditionals

```go
if true == true {
   fmt.Print("Fucking true")
} else {
   fmt.Print("Not.")
}
```

You can declare variables even within the if-syntax:

```go
if age := 9; age < 18 {
   fmt.Print("Not grown up")
}
```

When using this way to quickly declare a variable, the variable is not available outside of the if-statement.

## fmt package

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

## Arrays

```go
func main() {
   // creates an empty array with 5 elements of the type string
   var names [3]string
   fmt.Println(names) // [  ]
}
```

Whitespaces when printing the empty array will indicate the number of elements, the array is made for.
No joke.

## Slices

Arrays have a fixed length of elements, a slice can grow and shrink. They can only hold data of the same type.

This is how we can create a slice, holding data of the type string:

```go
func main() {
   cards := []string{"First", "Second"}
   fmt.Println(cards)    // [First Second]
   fmt.Println(cards[0]) // First
}
```

Let's add something to the slice:

```go
cards := []string{"First", "Second"}
cards = append(cards, "Third")
```

The append-function does not modify the existing slice - it returns a new one.

Looping through that slice with the for-loop:

```go
func main() {
   cards := []string{newCard(), newCard()}
   cards = append(cards, "Six of spades")

   for i, card := range cards {
      fmt.Println(i, card)
   }
}
```

we can also do it like this:

```go
for i := range cards {
   fmt.Println(cards[i])
}
```

## Custom types

Thanks to custom types, we can create functions, so called receiver-functions, that do only work with the certain type, we created. A custom type is therefore just a fancy replacement for a base type, not something completely new.

```go
students := []string{"Max", "Anna"}
```

This is how we can create a simple slice of stundents - but we can make things easier, and create one type for it.

```go
type people []string
students := people{"Max", "Anna"}
```

### Receiver Functions

We can combine custom types with so called receiver functions. Their syntax is a little bit weird.

```go

```

## Concurrency

In this example, there will never be "fish" printed.
Code will print sheep forever, because Go is blocking.

```go

func main() {
   count("sheep")
   count("fish")
}

func count(thing string) {
   for i := 1; true; i++ {
      fmt.Println(i, thing)
   }
}
```

We can create a go-routine, making the function execute at the same time with the go-keyword.
Now both will be executed, sheep, fish, sheep and so on.

```go
func main() {
   go count("sheep")
   count("fish")
}
```

When we make both functions a go-routine, the programm will finish instantly. Why? Because the go-routine takes the function into the background, and then continues to execute the code below.
When the second count() function also is a go routine, the main function is done.

We can avoid this by setting a Sleep or wait for userinput. Such code will block the further execution. In this example, sheep and fish will be printed for 2 seconds, then the code stops.

```go
func main() {
   go count("sheep")
   go count("fish")
   time.Sleep(time.Second * 2)
}
```

### Wait Groups

A wait group is the count of go routines, that should be executed in the code. They help us to manage all the ones running, and can be used to avoid the programming breaking before it should stop.
Here is a good example:

```go
import (
   "fmt"
   "sync"
   "time"
)

func main() {
   var wg sync.WaitGroup
   wg.Add(1)

   go func() {
      countFish("Fish")

      wg.Done()
   }()

   go func() {
      countSheep("Sheep")
   }()

   wg.Wait()
}


func countFish(thing string) {
   for i := 1; i <= 5; i++ {
      fmt.Println(i, thing)
      time.Sleep(time.Millisecond * 500)
   }
}

func countSheep(thing string) {
   for i := 1; i <= 10; i++ {
      fmt.Println(i, thing)
      time.Sleep(time.Millisecond * 500)
   }
}
```

countFish is only executed 5 times. Since both function executions are go-routines, but we said that there is only one routine in the code, the wg.done() will decrease the waiting-counter. Therefore, after countFish is done, the main-functions ends, the programm is done - but Sheep is only printed 6 times till then, even though, we want to run it till i <= 10.

To avoid this, we can must count countSheep as a routine in the waiting ones too:

```go
func main() {
   var wg sync.WaitGroup
   wg.Add(2)

   go func() {
      countFish("Fish")
      wg.Done()
   }()

   go func() {
      countSheep("Sheep")
      wg.Done()
   }()

   wg.Wait()
}
```

Now, when countFish is done, the couter still has 1 as value, so waits until countSheep is done too.