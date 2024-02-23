---
title: Interfaces in Go 
--- 

# Interfaces in Go 

Go interfaces offer a powerful tool for promoting abstraction, code reusability, and modularity. They define a set of method signatures that different types can implement, enabling you to treat objects with similar behaviors uniformly.

## Defining an Interface with Method Signatures 

```go
// Define an interface for shapes with a `Area()` method
type Shape interface {
    Area() float64
}
```

Explanation:

- This `Shape` interface defines a single method `Area()` that calculates the area of a shape.

## Implementing an Interface for a Struct or Other Type 

```go
// Implement the `Shape` interface for a `Circle` struct
type Circle struct {
    Radius float64
}

func (c *Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

// Implement the `Shape` interface for a `Rectangle` struct
type Rectangle struct {
    Width, Height float64
}

func (r *Rectangle) Area() float64 {
    return r.Width * r.Height
}
```

Explanation:

- The `Circle` and `Rectangle` structs implement the `Shape` interface by defining their own `Area()` methods based on their respective formulas.
- Both structs now have access to the `Area()` method, promoting code reuse.

## Anonymous Interfaces and Inline Implementations 

```go
func PrintInfo(s interface {
    Name() string
    Info() string
}) {
    fmt.Println("Name:", s.Name())
    fmt.Println("Info:", s.Info())
}

// Inline implementation for a person struct
type Person struct {
    Name string
}

func (p Person) Info() string {
    return "Just a regular person"
}

func main() {
    p := Person{Name: "Alice"}
    PrintInfo(p) // Works because Person implements the anonymous interface
}
```

Explanation:

- An anonymous interface defines methods within the function itself, allowing flexible use without explicit interface definitions.
- The `Person` struct can be used with `PrintInfo()` even though it doesn't explicitly implement a named interface, demonstrating the flexibility of anonymous interfaces.

## Implicit Interface Satisfaction 

```go
type Writer interface {
    Write(p []byte) (n int, err error)
}

type MyWriter struct{}

func (mw MyWriter) Write(p []byte) (int, error) {
    // Implementation for writing data
    return len(p), nil
}

func main() {
    var w Writer = MyWriter{} // Implicitly satisfies Writer because MyWriter has the required method
    _, err := w.Write([]byte("Hello"))
    if err != nil {
        // Handle error
    }
}
```

Explanation:

- Any type that has a method with the same signature as an interface method implicitly satisfies that interface.
- This allows for simpler code and flexibility when types naturally provide the required behavior.

## Interface Values and Type Assertion 

```go
func PrintValue(v interface{}) {
    switch t := v.(type) {
    case int:
        fmt.Println("Integer:", t)
    case string:
        fmt.Println("String:", t)
    case float64:
        fmt.Println("Float64:", t)
    default:
        fmt.Println("Unknown type:", reflect.TypeOf(t))
    }
}

func main() {
    values := []interface{}{10, "Hello", 3.14}
    for _, v := range values {
        PrintValue(v)
    }
}
```

Explanation:

- Interface values can hold any type that implements the interface's methods.
- Type assertion (`t := v.(type)`) allows you to check the concrete type of an interface value and access its specific methods.
- Be cautious with type assertions to avoid runtime errors if the value doesn't match the expected type.

## Embedding Interfaces 

```go
type Measurable interface {
    Measure() float64
}

type Shape interface {
    Area() float64
}

type Circle struct {
    Radius float64
}

func (c *Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

// Circle implicitly satisfies Measurable because it has the required method
func (c *Circle) Measure() float64 {
    return c.Area() // Reuse the Area()

}
```