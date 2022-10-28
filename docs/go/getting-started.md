---
sidebar_position: 2
title: Getting started in Go 
---

# Getting started with Go 

## Installing Go 

Getting started with Go is easy. 
Go to [go.dev](https://go.dev/doc/install) and install the Go compiler for your machine. 
In case you don't want to install anything locally, you can get started with Go in Docker too. (Fun fact: Docker was written in Go)

When your installation was sucessful, you can check Go's version in your terminal with: 

```bash
go version 
```

## Hello world in Go 

On your machine, create a file called app.go. Once created, past the following code into it: 

```go
package main // a package must be defined

import "fmt"

func main() {
  fmt.Println("Hello World!")
}
```

To execute it and see "Hello World!" written in the terminal, run: 

```bash
go run app.go
```

When you want to compile your little Go programm, run: 

```bash
go build app.go
./app.go
```

On Windows, it will create a .exe file, which is to be executed differently. 

## Understanding Go's structure

Before you play around with Go more, I'd like to emphasize some basis rules of Go. 

### main and init function 

As you might have noticed, there is a main-function in our Hello world example as we know it from C or C++. 
Just like in C/C++, the main function is executed automatically and therefore neccessary as an entry point. 
Keep in mind each package of Go must have a single main-function.


Next to main(), there can be multiple functions called init(), which are optional. 
As you can create more than one init function, they are called in order of their creation. 

```go
package main // a package must be defined

import "fmt"

func init() {
  fmt.Println("first init")
}

func init() {
  fmt.Println("second init")
}

func main() {
  fmt.Println("Hello World!")
}
```

output: 

```bash
first init 
second init 
Hello World!
```


### What imperatively means 

Go is an imperative programming language, which means the code consists of 
commands, which are executed from top to bottom. 
In Go, it is important to not use data before its initialization. The example below leads to an error

```go
func main() {
  fmt.Println(num)
  var num int = 10
}
```






