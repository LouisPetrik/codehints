---
title: Introduction to Go
sidebar_position: 1
slug: /category/go
---

# What is Go?

Go is a mostly imperativ programming language, created by Google in 2009. Go can be seen as a modern alternative to C, yet it's main focus the world of servers.
Go was created by famous computer scientists like Rob Pike, Ken Thompson and Robert Griesemer. Even though it is quite low-level, Go has a garbage collector.

The languages aim is to be precise and readable just like Python, yet, also be a great choice for efficient and fast code. 
A huge difference to older, compiled language is Go's fast compile time - this was one of the reasons for 

Some famous projects, written in Go are: Docker, the Caddy Webserver and the Algorand blockchain. 

## Hello world in Go 

```go 
package main
import "fmt"

func main() {
  fmt.Println("Hello world")
}
```

## Further code examples

### A HTTP client in Go 

```go 
package main

import (
    "bufio"
    "fmt"
    "net/http"
)

func main() {
  resp, err := http.Get("https://gobyexample.com")
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  fmt.Println("Response status:", resp.Status)

  scanner := bufio.NewScanner(resp.Body)
  for i := 0; scanner.Scan() && i < 5; i++ {
    fmt.Println(scanner.Text())
  }

  if err := scanner.Err(); err != nil {
    panic(err)
  }
}
```
All credits to [gobyexample.com](https://gobyexample.com/)


## Author's Notes

Go is fun to learn, yet might feel a little strange at first. The documenations and community are great.

When you know C already, you will easily adopt to Go. 

## Sources

As the source for these Cheatsheets, a Udemy course was used.

## Additional Ressources

-  [Go by Example](https://gobyexample.com/)
