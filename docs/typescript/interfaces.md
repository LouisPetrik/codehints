---
title: Interfaces in TypeScript
sidebar_position: 3
---

# TypeScript Interfaces Cheat Sheet 

Programming in TypeScript involves defining and working with different types of data structures and constructs. One such powerful construct in TypeScript is interfaces, which provide a way to define custom types in your code. This cheat sheet will guide you through the essentials of using TypeScript interfaces, ensuring a seamless programming experience.

## What are interfaces?

In TypeScript, interfaces play a key role in defining complex types and assisting with type checking. They provide a contract for objects, ensuring they have specific properties with the defined types. An interface doesn't transpile into any JavaScript code, making them a purely TypeScript concept, used for static type-checking.

```typescript
interface Person {
  name: string;
  age: number;
}
```

In the above example, we have an interface `Person` with properties `name` and `age`. This provides a blueprint for any object which claims to be of type `Person`.

## Interfaces as type

Interfaces can be used to type-check variables. Any variable declared with an interface type must adhere to the structure provided by the interface.

```typescript
interface Animal {
  species: string;
  age: number;
}

let dog: Animal = { species: 'Dog', age: 5 }; // Correct usage

let cat: Animal = { species: 'Cat' }; // Error: Property 'age' is missing in type '{ species: string; }'
```

In this example, `Animal` interface is used as a type for the `dog` and `cat` variables. The `cat` variable doesn't follow the `Animal` interface structure, resulting in a type error.

## Interfaces vs. types

While both interfaces and <a href="/typescript/data-types">types</a> can be used to define custom types, interfaces are more extensible because they can be merged and implemented in classes. However, `type` is more flexible and can represent primitive types, union types, intersection types, etc., which can't be done with interfaces.

```typescript
interface A {
  x: number;
}

type B = {
  y: string;
}

let obj: A & B = { x: 5, y: "hello" };
```

Here, both `A` and `B` are custom types, but the way they're declared is different. We're using them together to type-check `obj`.

Here is a more in-depth comparison of <a href="/blog/types-interfaces">interfaces vs. types in TypeScript</a>. 

## Optional properties

Interfaces allow optional properties that might or might not be present in the object. These are denoted by a `?` following the property name.

```typescript
interface Student {
  name: string;
  grade?: number;
}

let john: Student = { name: "John" }; // Correct, grade is optional
```

In this case, `john` can be typed with `Student` even without providing a `grade` because it's an optional property.

## Read-only properties

Read-only properties in interfaces are properties that can only be modified when an object is first created. They can't be changed afterwards.

```typescript
interface Vehicle {
  readonly make: string;
  model: string;
}

let car: Vehicle = { make: "Toyota", model: "Corolla" };
car.model = "Camry"; // Allowed
car.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
```

Here, the `make` property of the `Vehicle` interface is read-only. Attempting to change its value after object creation results in an error.

## Extending interfaces

Interfaces can extend one another, similar to how classes do. This allows us to create new interfaces based on existing ones.

```typescript
interface Animal {
  species: string;
}

interface Dog extends Animal {
  barkVolume: number;
}

let myDog: Dog = { species: "Dog", barkVolume: 3 };
```

In this example, the `Dog` interface extends the `Animal` interface, and the `myDog` object is typed with `Dog`.

## Interface for function

Interfaces can also define a function type by describing the function's parameter list and return type.

```typescript
interface Greet {
  (name: string, age: number): string;
}

let sayHello: Greet = function(name, age) {
  return `Hello ${name}, you are ${age} years old.`;
}
```

Here, `Greet` is an interface for a function with a certain signature. `sayHello` is a function that matches this signature.

## Interface for array

Interfaces can be used to define the type of array elements.

```typescript
interface NumberArray {
  [index: number]: number;
}

let arr: NumberArray = [1, 2, 3, 4];
```

In this example, `NumberArray` is an interface for an array where the index is a number and the value at that index is also a number. The variable `arr` is an example of a `NumberArray`.

Remember, mastering interfaces in TypeScript opens up a world of possibilities for structuring and ensuring the integrity of your data in applications. Use this cheat sheet as your quick reference guide while coding!

## Implementing Interfaces in Classes

In TypeScript, a class can implement an interface to enforce particular contract (structure). It guarantees that a class has specific properties or methods.

```typescript
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let myCircle = new Circle(5);
```

In this example, the `Shape` interface requires a method named `area` that returns a number. The `Circle` class implements this interface, and so it must contain an `area` method that adheres to this contract. Therefore, any instance of `Circle`, like `myCircle`, will have an `area` method.

## Indexable Interfaces

Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing. 

```typescript
interface StringArray {
  [index: number]: string;
}

let fruits: StringArray;
fruits = ["Apple", "Banana", "Mango"];
```

In this example, we have an interface `StringArray` that has an index signature. This interface states that when a `StringArray` is indexed with a number, it will return a string.

## Interface Inheritance

Interfaces can inherit from multiple interfaces, creating a combination of all the interfaces.

```typescript
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

let myCircle: Circle = {color: "red", radius: 5};
```

Here, `Circle` interface is extending the `Shape` interface, meaning that it will have all the properties of `Shape` plus the ones it defines. So, a `Circle` is a `Shape` with a `radius`.

## Hybrid Types

Interfaces can define objects that work as a combination of several types. 

```typescript
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = (function (start: number) { }) as Counter;
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

In this example, `Counter` is a complex object with a function signature, a property, and a method. `getCounter` is a function that correctly creates a `Counter` object.

Working with TypeScript interfaces allows you to write cleaner, more maintainable code that adheres to strict typing rules. By understanding and leveraging the power of interfaces, you can significantly improve your TypeScript coding skills.

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
` 

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are interfaces in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In TypeScript, interfaces play a key role in defining complex types and assisting with type checking. They provide a contract for objects, ensuring they have specific properties with the defined types. An interface doesn't transpile into any JavaScript code, making them a purely TypeScript concept, used for static type-checking."
      }
    },
    {
      "@type": "Question",
      "name": "How are interfaces used as types in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interfaces can be used to type-check variables. Any variable declared with an interface type must adhere to the structure provided by the interface."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between interfaces and types in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While both interfaces and types can be used to define custom types, interfaces are more extensible because they can be merged and implemented in classes. However, type is more flexible and can represent primitive types, union types, intersection types, etc., which can't be done with interfaces."
      }
    },
    {
      "@type": "Question",
      "name": "What are optional properties in TypeScript interfaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interfaces allow optional properties that might or might not be present in the object. These are denoted by a ? following the property name."
      }
    },
    {
      "@type": "Question",
      "name": "What are read-only properties in TypeScript interfaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Read-only properties in interfaces are properties that can only be modified when an object is first created. They can't be changed afterwards."
      }
    },
    {
      "@type": "Question",
      "name": "How can interfaces extend one another in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interfaces can extend one another, similar to how classes do. This allows us to create new interfaces based on existing ones."
      }
    },
    {
      "@type": "Question",
      "name": "How can interfaces define a function type in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interfaces can also define a function type by describing the function's parameter list and return type."
      }
    },
    {
      "@type": "Question",
      "name": "How are interfaces used for array typing in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interfaces can be used to define the type of array elements."
      }
    },
    {
      "@type": "Question",
      "name": "How can a class implement an interface in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In TypeScript, a class can implement an interface to enforce particular contract (structure). It guarantees that a class has specific properties or methods."
      }
    },
    {
      "@type": "Question",
      "name": "What are indexable interfaces in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing."
      }
    },
    {
      "@type": "Question",
      "name": "How does interface inheritance work in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interfaces can inherit from multiple interfaces, creating a combination of all the interfaces."
      }
    },
    {
      "@type": "Question",
      "name": "What are hybrid types in TypeScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interfaces can define objects that work as a combination of several types."
      }
    }
  ]
}

`}}></script>