---
title: Loops in Go
---

# For Loops

For-Loops are the only loops which can be used in Go. There are no for-reach and not even while-loops in Go.
At first, you might find this weird. Yet, for-loops are used for all cases.

```go
func main() {
  for i := 0; i <= 3; i++ {
    fmt.Println(i) // 0, 1, 2, 3
  }
}
```

Using an already existing variable:

```go
i := 0
for i := i; i <= 3; i++ {
   fmt.Println(i)
}
```

This way, while-loops as we know them from other programming languages are replaced.
