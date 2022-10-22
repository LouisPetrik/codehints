---
title: Loops in Go 
---

# For Loops

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