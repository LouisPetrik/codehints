---
title: Generics
sidebar_position: 4
---

<head>
  <title>Understanding Generics in TypeScript</title>
</head>

# Generics in TypeScript

Generics enable you to write flexible, reusable code while still maintaining strong typing. They are a foundational aspect of TypeScript and many modern programming languages. 

## What are generics?

Generics are a tool that allows you to write functions, classes, and interfaces that work with a variety of types while maintaining type safety. Instead of committing to a single data type, generics allow you to work with any type.

Here's a simple example of a function using generics:

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

In this example, `T` is a type variable—a kind of placeholder for any type. When you call the `identity` function, TypeScript will replace `T` with the actual type you use.

### Why are generics important in TypeScript?

Generics are important in TypeScript because they allow for reusable and scalable code. By using generics, a developer can create components that work over a variety of types rather than a single one.

Consider this scenario:

```typescript
function stringIdentity(arg: string): string {
    return arg;
}
```

This function can only accept strings. If you want to use this function with numbers, you'd need to create a new one. Using generics, you can handle multiple types with a single function, improving scalability and reusability.

### Benefits of using generics

Generics offer several key benefits:

1. **Type Safety**: Generics provide type safety without the need to know the exact type at compile time. They ensure that the type you put in is the same type you get out.
2. **Code Reusability**: With generics, you write less code and have less repetition in your codebase. You can write a single function, class, or interface that can handle a variety of types.
3. **Flexible Interfaces**: Generics allow you to define the most appropriate interfaces for your code.

### Generic Types

When you use generics, TypeScript replaces the type variables with the actual types you're using. This replacement is known as the generic type. 

For example:

```typescript
let myIdentity: <T>(arg: T) => T = identity;
```

In this example, `myIdentity` has the type of a generic function. TypeScript knows that `T` is a placeholder, and it will replace it with the actual type when `myIdentity` is called.

## Declaring generic types in TypeScript

To declare a generic type, you use a type variable—a kind of placeholder for any type.

Here's a simple example:

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

In this example, `T` is the type variable. When you call `identity`, TypeScript will replace `T` with the actual type you use.

### Type inference with generics

TypeScript can infer the type of a generic function based on the argument you pass to it. This feature is known as type inference.

Here's an example:

```typescript
let output = identity("TypeScript");  // type of output will be inferred as string
```

In this example, TypeScript infers that `T` must be `string` because you're calling `identity` with a string.

### Using type parameters and constraints

Type parameters and constraints provide additional flexibility when working with generics. They allow you to specify characteristics the types used in generic functions, classes, and interfaces must have.

Here's an example of a function that uses a type parameter and a constraint:

```typescript
function loggingIdentity<T extends Array<any>>(arg: T): T {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

In this example, the constraint `extends Array<any>` requires that `T` be an array.

### Generic Functions

A generic function is a function that can work with any type. Here's a simple example of a generic function:

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

In this example, `identity` is a generic function. It uses the type variable `T` to allow it to work with any type.

## Type inference and function overloads

Type inference and function overloads work together in TypeScript to provide powerful and flexible type checking. Function overloads allow you to define multiple signatures for a function, and type inference lets TypeScript choose the appropriate one based on the types of the arguments you pass.

Here's an example:

```typescript
function identity<T>(arg: T): T;
function identity(arg: any): any;
function identity(arg: any) {
    return arg;
}

let output = identity("TypeScript");  // type of output will be inferred as string
```

In this example, TypeScript infers that the `T` in the first overload must be `string` because you're calling `identity` with a string.

## Using type parameters in function signatures

You can use type parameters in function signatures to allow your functions to handle a variety of types while maintaining type safety.

Here's an example:

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

In this example, `identity` uses the type parameter `T` in its signature. This allows it to work with any type.

## Generic classes

Generic classes work much like generic interfaces and functions. A generic class has a similar shape to a class, with a generic type list (e.g., `<T>`).

Here's an example:

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
```

In this example, `GenericNumber` is a class with the generic type `T`. It can work with any type: numbers, strings, etc.

## Type Constraints and Bounds

Type constraints and bounds provide additional control over the types you can use with generics.

### Applying constraints on generic types

A constraint limits the types you can use with a generic type variable. You define a constraint with the `extends` keyword.

Here's an example:

```typescript
function loggingIdentity<T extends Array<any>>(arg: T): T {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

In this example, `T extends Array<any>` is a constraint that requires `T` to be an array.

### Using type bounds to restrict generic parameters

Type bounds are a kind of constraint that restricts what types a type variable can accept.

Here's an example:

```typescript
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}
```

In this example, the type bound `T extends U` requires that `T` be a subtype of `U`.

### Working with keyof and keyof typeof operators

The `keyof` and `keyof typeof` operators in TypeScript allow you to use property names as types and provide type safety when accessing properties.

Here's an example:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

getProperty(x, "a"); // okay
getProperty(x, "m

"); // error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

In this example, `K extends keyof T` is a constraint that requires `K` to be a key of `T`.

## Advanced Generic Techniques

Advanced generic techniques include using mapped types and conditional types to create more flexible, reusable, and type-safe code.

### Mapped types and conditional types

Mapped types allow you to transform the properties in an old type into a new type. Conditional types allow you to select one of two possible types based on a condition.

Here's an example of a mapped type:

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

In this example, `Readonly<T>` is a mapped type that makes all properties of `T` readonly. `Partial<T>` is a mapped type that makes all properties of `T` optional.

### Type inference with conditional types

Type inference with conditional types allows TypeScript to infer the type of a value based on a condition.

Here's an example:

```typescript
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<1>;  // "number"
```

In this example, `TypeName<T>` is a conditional type that selects a string literal type based on the type of `T`.

### Using infer to extract type information

The `infer` keyword in TypeScript allows you to infer types within conditional types.

Here's an example:

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type T0 = ReturnType<() => string>;  // string
```

In this example, `ReturnType<T>` is a conditional type that infers the return type of a function type `T`.

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
` 

{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are generics?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generics are a tool that allows you to write functions, classes, and interfaces that work with a variety of types while maintaining type safety. Instead of committing to a single data type, generics allow you to work with any type."
            }
        },
        {
            "@type": "Question",
            "name": "Why are generics important in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generics are important in TypeScript because they allow for reusable and scalable code. By using generics, a developer can create components that work over a variety of types rather than a single one."
            }
        },
        {
            "@type": "Question",
            "name": "What are the benefits of using generics in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generics offer several key benefits: Type Safety, Code Reusability, and Flexible Interfaces."
            }
        },
        {
            "@type": "Question",
            "name": "How to declare generic types in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To declare a generic type, you use a type variable—a kind of placeholder for any type. When you call a function with a type variable, TypeScript will replace the type variable with the actual type you use."
            }
        },
        {
            "@type": "Question",
            "name": "What is type inference with generics?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TypeScript can infer the type of a generic function based on the argument you pass to it. This feature is known as type inference."
            }
        },
        {
            "@type": "Question",
            "name": "How to use type parameters and constraints in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Type parameters and constraints provide additional flexibility when working with generics. They allow you to specify characteristics the types used in generic functions, classes, and interfaces must have."
            }
        },
        {
            "@type": "Question",
            "name": "What are generic functions in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A generic function is a function that can work with any type. It uses the type variable to allow it to work with any type."
            }
        },
        {
            "@type": "Question",
            "name": "How do type inference and function overloads work together in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Type inference and function overloads work together in TypeScript to provide powerful and flexible type checking. Function overloads allow you to define multiple signatures for a function, and type inference lets TypeScript choose the appropriate one based on the types of the arguments you pass."
            }
        },
        {
            "@type": "Question",
            "name": "How to use type parameters in function signatures in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can use type parameters in function signatures to allow your functions to handle a variety of types while maintaining type safety."
            }
        },
        {
            "@type": "Question",
            "name": "What are generic classes in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generic classes work much like generic interfaces and functions. A generic class has a similar shape to a class, with a generic type list."
            }
        },
        {
            "@type": "Question",
            "name": "What are Type Constraints and Bounds in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Type constraints and bounds provide additional control over the types you can use with generics. A constraint limits the types you can use with a generic type variable, while Type bounds are a kind of constraint that restricts what types a type variable can accept."
            }
        },
        {
            "@type": "Question",
            "name": "How to work with keyof and keyof typeof operators in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The keyof and keyof typeof operators in TypeScript allow you to use property names as types and provide type safety when accessing properties."
            }
        },
        {
            "@type": "Question",
            "name": "What are some advanced generic techniques in TypeScript?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Advanced generic techniques include using mapped types and conditional types to create more flexible, reusable, and type-safe code."
            }
        }
    ]
}

`}}></script>

