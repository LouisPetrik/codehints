---
title: Arrays and Slices in Go 
id: arrays-slices-go
---

# Arrays and Slices in Go

Arrays and slices are fundamental data structures in Go used for storing and manipulating ordered sequences of elements. While they share similarities, they have key differences in size and flexibility.

## Arrays

### Definition and Declaration

Arrays have a fixed size defined at declaration. They are declared using `[size]type{values}`:

```go
numbers := [5]int{1, 2, 3, 4, 5}
```

This creates an array `numbers` of size 5, initialized with values 1 to 5.

### Accessing Elements

Elements are accessed using their index within square brackets:

```go
firstNumber := numbers[0] // firstNumber will be 1
thirdNumber := numbers[2] // thirdNumber will be 3
```

Index starts from 0, and accessing an out-of-bounds index leads to a panic.

### Modifying Elements

Elements can be modified using the same syntax:

```go
numbers[2] = 10 // Change third element to 10
```

### Length and Capacity

- `len(array)` returns the number of elements in the array (always equal to the declared size).
- Arrays don't have a separate capacity concept.

## Slices

### Definition and Creation

Slices are dynamically-sized, flexible references to underlying arrays. They are created using:

- `[]type`: Empty slice of a specific type.
- `make([]type, length, capacity)`: Allocate a slice with specified length and capacity.
- Slicing an existing array or slice: `slice := array[low:high]`.

```go
// Empty slice
emptySlice := []string{}

// Slice with length and capacity
numbersSlice := make([]int, 3, 5) // Length 3, capacity 5

// Slicing an array
myArray := [5]int{1, 2, 3, 4, 5}
subSlice := myArray[1:4] // Subslice from index 1 to 4 (excluding 4)
```

### Accessing and Modifying Elements

Similar to arrays, elements are accessed and modified using their index:

```go
firstElement := numbersSlice[0] // firstElement will be 0

subSlice[1] = 20 // Change second element of subSlice
```

### Length and Capacity

- `len(slice)` returns the number of elements in the slice.
- `cap(slice)` returns the capacity (maximum number of elements) of the underlying array.

### Slicing a Slice

Slices can be sliced to create new sub-slices:

```go
subSubSlice := subSlice[0:2] // Subslice of subSlice from index 0 to 2 (excluding 2)
```

### Appending Elements

The `append` function adds elements to the end of a slice and returns a new slice with the updated elements:

```go
newSlice := append(numbersSlice, 10, 20) // Creates a new slice with numbersSlice + 10 and 20
```

### Built-in functions

- `append`: Adds elements to the end of a slice.
- `copy`: Copies elements from one slice to another.
- `cap`: Returns the capacity of a slice.
- `make`: Creates a slice with specified length and capacity.

These are just some of the essential aspects of arrays and slices in Go. Remember to explore the documentation and experiment with code for a deeper understanding.


## Multidimensional Arrays

### Declaration and Access

Multidimensional arrays are arrays of arrays. They are declared like:

```go
grid := [3][4]int{
  {1, 2, 3, 4},
  {5, 6, 7, 8},
  {9, 10, 11, 12},
}
```

Elements are accessed using multiple indices:

```go
firstElement := grid[0][0] // firstElement will be 1
thirdRow := grid[2] // thirdRow is a 1D array {9, 10, 11, 12}
```

### Slicing Multidimensional Arrays

Slices can be used with multidimensional arrays:

```go
subGrid := grid[1:3] // Subgrid is a 2D slice containing second and third rows
subRow := grid[0][1:3] // Subrow is a slice of second and third elements in the first row
```

## Pointers and Slices

### Passing Slices by Reference

Slices are passed by reference to functions, meaning changes within the function modify the original slice.

```go
func modifySlice(s []int) {
  s[0] = 100
}

numbers := []int{1, 2, 3}
modifySlice(numbers)
fmt.Println(numbers) // Output: [100 2 3]
```

### Modifying Slices within Functions

- Use `append` to add elements to a slice within a function.
- Be cautious when modifying the underlying array directly, as it can lead to unexpected behavior.

```go
func appendToSlice(s []int, value int) {
  s = append(s, value)
}

numbers := []int{1, 2, 3}
appendToSlice(numbers, 4)
fmt.Println(numbers) // Output: [1 2 3 4]
```

Remember, these are just brief introductions to each subtopic. For deeper understanding, explore the Go documentation and experiment with code examples.
