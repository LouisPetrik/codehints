--- 
title: Objects in JavaScript
--- 

# Objects in JavaScript

JavaScript objects are containers that store related data and functionality. They contain keys, also known as properties, that are associated with values. Here, we'll cover different ways of creating objects, accessing and modifying their properties, making them immutable or extensible, and more.

## Creating Objects

### Object Literal Notation and Syntax

One of the simplest ways to create an object in JavaScript is using object literal notation. It involves defining an object and its properties inside curly braces `{}`.

```javascript
let book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};
```

In this code snippet, we create a `book` object with properties `title`, `author`, and `year`. The property names are followed by a colon `:` and their corresponding values.

### Using the Object Constructor

The Object constructor is another way to create an object. This is a more explicit approach, and it can be used when you want to create an empty object, and then add properties to it. The blueprint for the object must be outlined first - this can be done be using <a href="/javascript/oop">object-oriented programming</a> in JavaScript. 

```javascript
let book = new Object();
book.title = "1984";
book.author = "George Orwell";
book.year = 1949;
```

In this snippet, we first create an empty `book` object using the `new Object()` constructor. We then add properties to the `book` object using dot notation.

### Constructor Functions and 'new'

Constructor functions allow us to define a template for creating objects. They start with a capital letter to distinguish them from regular functions. When called with the `new` keyword, a new object is created and returned.

```javascript
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

let book = new Book("1984", "George Orwell", 1949);
```

Here, `Book` is a constructor function that takes `title`, `author`, and `year` as arguments. We use the `this` keyword to set properties on the object being created. We then create a new `book` object by calling `Book` with the `new` keyword.

## Accessing Properties

### Dot Notation

Dot notation is the most common way to access properties of an object. It involves using a dot `.` followed by the property name.

```javascript
let title = book.title; // "1984"
```

In this example, we access the `title` property of the `book` object.

### Bracket Notation

Bracket notation can also be used to access object properties. It can be handy when the property name is stored in a variable or the property name is not a valid identifier.

```javascript
let propertyName = "author";
let author = book[propertyName]; // "George Orwell"
```

In this example, we use bracket notation to access the `author` property of the `book` object using a variable.

### Nested Properties

Objects can contain other objects as properties. To access nested properties, we chain the property names together using dot notation or bracket notation.

```javascript
let book = {
  title: "1984",
  author: {
    firstName: "George",
    lastName: "Orwell"
  },
  year: 1949
};

let authorLastName = book.author.lastName; // "Orwell"
```

In this example, the `book` object contains an `author` object as a property. We access the `lastName` property of the `author` object by chaining the property names together.

## Adding Properties

You can add properties to an existing object using dot notation or bracket notation.

```javascript
book.publisher = "Secker & Warburg";
book["ISBN"] = "978-0451524935";
```

In this snippet, we add a `publisher` property and an `ISBN` property to the `book` object.

## Modifying Properties

Modifying object properties is similar to adding properties. You simply assign a new value to the property using dot notation or bracket notation.

```javascript
book.year = 1950;
book["title"] = "Nineteen Eighty-Four";
```

Here, we modify the `year` and `title` properties of the `book` object.

## Removing Properties

The `delete` operator can be used to remove properties from an object.

```javascript
delete book.year;
delete book["ISBN"];
```

In this snippet, we remove the `year` and `ISBN` properties from the `book` object.

## Serialization and Deserialization

Serialization is the process of converting an object into a string format that can be easily stored or transmitted and then later reconstructed. In JavaScript, we use `JSON.stringify()` for serialization. Deserialization is the reverse process, converting the string back into an object. For this, we use `JSON.parse()`.

```javascript
let serializedBook = JSON.stringify(book);
console.log(serializedBook);
// '{"title":"Nineteen Eighty-Four","author":"George Orwell","publisher":"Secker & Warburg"}'

let deserializedBook = JSON.parse(serializedBook);
console.log(deserializedBook);
// {title: "Nineteen Eighty-Four", author: "George Orwell", publisher: "Secker & Warburg"}
```

In this example, `JSON.stringify()` is used to serialize the `book` object into a string, and `JSON.parse()` is used to deserialize that string back into an object.

## Cloning and Copying

There are various ways to clone or copy an object in JavaScript. One of the simplest ways is using the spread operator `...`.

```javascript
let bookCopy = {...book};
```

In this example, the spread operator is used to create a shallow copy of the `book` object. Note that this only creates a shallow copy, so nested objects will still be references.

## Enumeration

To enumerate, or loop over, the properties of an object, we can use a `for...in` loop.

```javascript
for (let property in book) {
  console.log(property + ": " + book[property]);
}
```

In this snippet, a `for...in` loop is used to iterate over each property in the `book` object and log it to the console.

## Destructuring

Destructuring is a convenient way of extracting multiple properties from an object. It reduces the amount of code needed to access these properties.

```javascript
let { title, author } = book;
console.log(title);  // "Nineteen Eighty-Four"
console.log(author); // "George Orwell"
```

Here, we use destructuring to extract the `title` and `author` properties from the `book` object.

## Immutability and Extensibility

### Object.freeze()

The `Object.freeze()` method can be used to make an object immutable, meaning its properties cannot be added, deleted, or changed.

```javascript
Object.freeze(book);
book.year = 1985; // This will be ignored
```

After calling `Object.freeze()` on the `book` object, any attempts to modify the object's properties will be ignored.

### Object.seal()

The `Object.seal()` method prevents new properties from being added to an object and marks all existing properties as non-configurable. However, the values of existing properties can still be changed.

```javascript
Object.seal(book);
book.year = 1985;      // This will

 work
book.ISBN = "1234567"; // This will be ignored
```

In this snippet, after calling `Object.seal()` on the `book` object, we can modify existing properties, but we can't add new ones.

### Object.preventExtensions()

The `Object.preventExtensions()` method prevents new properties from being added to an object, but it allows existing properties to be deleted or changed.

```javascript
Object.preventExtensions(book);
book.year = 1985;      // This will work
book.ISBN = "1234567"; // This will be ignored
```

After calling `Object.preventExtensions()` on the `book` object, we can modify or delete existing properties, but we can't add new ones.