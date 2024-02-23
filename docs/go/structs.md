--- 
title: Structs in Go
--- 


Structs are fundamental building blocks in Go, allowing you to group related data fields into user-defined types. This empowers you to create logical representations of entities and efficiently manage their attributes.

## Defining Structs with Named Fields and Types

```go
type Person struct {
    Name string
    Age  int
}

type Point struct {
    X float64
    Y float64
}
```

**Explanation:**

- `type` keyword declares a new struct type.
- Each field within the struct is defined with its name and data type (e.g., `string`, `int`, `float64`).
- These named fields provide clear meaning and organization to your data.

## Basic Usage of Structs

```go
person := Person{"John Doe", 30}
point := Point{2.5, 4.2}

fmt.Println("Person:", person.Name, person.Age)
fmt.Println("Point:", point.X, point.Y)
```

**Explanation:**

- You can create struct instances (`person`, `point`) using the struct type name and providing values for each field (either in order or by name).
- Access struct fields using the dot notation (e.g., `person.Name`, `point.Y`).
- This code demonstrates how to create and utilize structs to store and retrieve data.

## Accessing Struct Fields using Dot Notation

```go
person := Person{Name: "Jane Doe", Age: 25}

age := person.Age

person.Name = "Alice Smith"

fmt.Println("Person:", person.Name, person.Age)
```

**Explanation:**

- The dot operator (`.`) is used to access individual fields of a struct instance.
- You can access fields for reading (`age := person.Age`) or writing (`person.Name = "Alice Smith"`).
- This code showcases how to interact with and modify the data within a struct.

## Initializing Structs with Literal Values and Struct Literals

```go
// Literal values
person := Person{"Bob", 40}

// Struct literals
point := Point{X: 1.0, Y: 2.0}
anonymous := struct {
    Name string
}{"Anonymous"}

fmt.Println("Person:", person)
fmt.Println("Point:", point)
fmt.Println("Anonymous:", anonymous.Name)
```

**Explanation:**

- Literal values can be used to directly initialize fields when creating a struct instance.
- Struct literals provide a concise way to create structs without explicitly mentioning fields: `{X: 1.0, Y: 2.0}`.
- Anonymous structs (defined without a name) can be useful for temporary data or specific use cases.

## Passing Structs by Value and by Reference

```go
func updateAge(person Person) {
    person.Age++ // Doesn't modify original `person`
}

func updateAgeByRef(person *Person) {
    (*person).Age++ // Modifies original `person` through pointer
}

person := Person{Name: "Mary", Age: 35}
updateAge(person)
fmt.Println("Person (value pass):", person.Age) // Value remains 35

updateAgeByRef(&person)
fmt.Println("Person (reference pass):", person.Age) // Value now 36
```

**Explanation:**

- By default, structs are passed by value (copy), meaning changes within a function don't affect the original struct.
- Use pointers (`*Person`) and explicit dereferencing (`*person`) to pass structs by reference, modifying the original struct within functions.
- This code demonstrates the difference between passing by value and by reference, highlighting when each approach is appropriate.

## Pointers to Structs and Dereferencing

```go
person := Person{Name: "Peter", Age: 45}
personPtr := &person

fmt.Println("Name before:", person.Name)
personPtr.Name = "Updated Name" // Modify through pointer
fmt.Println("Name after:", person.Name) // Value changed
```

**Explanation:**

- Pointers (`&person`) store memory addresses of structs, allowing you to indirectly access and modify struct values.
- Dereferencing (`*personPtr`) retrieves the actual struct value at the stored address.
- Pointers offer flexibility and efficiency when dealing with large or complex structs, as you can modify them without copying the entire data.

