---
title: Records in PureScript 
----

# Records

Records are basically like Objects in JS. Yet, immutable, of course.
As with functions, we can and should describe their structure and types before
initialising them:

```haskell
type Person =
  { name :: String,
    age :: Int }

max :: Person
max = { name: "Max", age: 22 }

main = log (show max)
```

The code will log the following in the console:

```
{ age: 22, name: "Max" }
```

As you can see, just like an object in JavaScript.

## Accessing a records properties

Accessing those works just like in JavaScript, using the "."-operator.

```haskell
main = log (show max.name)
```

We can also create a function to access the name-property of a Person-type variable:

```haskell
getName :: Person -> String
getName person = person.name

main = log (getName max)
```