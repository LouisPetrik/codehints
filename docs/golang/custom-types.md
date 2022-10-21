# Custom types

Thanks to custom types, we can create functions, so called receiver-functions, that do only work with the certain type, we created. A custom type is therefore just a fancy replacement for a base type, not something completely new.

```go
students := []string{"Max", "Anna"}
```

This is how we can create a simple slice of stundents - but we can make things easier, and create one type for it.

```go
type people []string
students := people{"Max", "Anna"}
```
