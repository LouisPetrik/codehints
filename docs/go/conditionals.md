---
title: Conditionals in Go 
---

# Conditionals

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