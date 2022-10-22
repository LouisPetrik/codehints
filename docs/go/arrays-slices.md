---
title: Arrays and Slices in Go 
---

# Arrays & Slices 

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