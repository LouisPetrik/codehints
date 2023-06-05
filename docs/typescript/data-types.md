---
title: Types in TypeScript
sidebar_position: 2
---

# Types in TypeScript

TypeScript is a statically typed superset of JavaScript that enhances the language by adding types. By incorporating types, TypeScript helps catch bugs early, enhances code readability, and makes the development process more predictable. Understanding types in TypeScript is key for any programmer wanting to leverage its power.

## Assigning Types

Assigning types in TypeScript is all about annotating your variables, function parameters, and function return types with their respective types.

```typescript
let name: string = "John Doe";
let age: number = 25;
let isEmployed: boolean = true;
```

The above code shows how we assign types to variables in TypeScript. We declare a variable using the `let` keyword, followed by the variable name, a colon (:), the type, and the value. This makes our code more predictable because we know what type of value each variable should hold.

### Explicit Types

Explicit types in TypeScript involve directly assigning a type to a variable when you declare it. 

```typescript
let studentName: string;
let studentAge: number;
let isStudent: boolean;
```

Here, we're explicitly telling TypeScript that `studentName` should be a string, `studentAge` should be a number, and `isStudent` should be a boolean. By explicitly defining types, we can prevent unintentional assignments of the wrong types to these variables.

### Implicit (Inferring) Types

TypeScript has a smart type inference system. If you assign a value to a variable at the time of declaration, TypeScript can infer the type of variable.

```typescript
let cityName = "New York"; // TypeScript infers as string
let cityPopulation = 8623000; // TypeScript infers as number
```

In this case, TypeScript infers `cityName` to be of type string and `cityPopulation` to be of type number. So, even if you don't explicitly mention types, TypeScript has got you covered.

## Primitive Types

TypeScript includes all of JavaScript's primitive types: boolean, number, and string.

### boolean

This type can only be `true` or `false`.

```typescript
let isTrue: boolean = true;
let isFalse: boolean = false;
```

### number

The `number` type can be used for integer as well as floating point values.

```typescript
let decimal: number = 10;
let float: number = 10.5;
```

### string

The `string` type represents text values.

```typescript
let firstName: string = "Jane";
let lastName: string = "Doe";
```

## Special Types

TypeScript introduces some special types like `any`, `unknown`, `never`, `undefined`, and `null`.

### any

The `any` type is a powerful way to work with existing JavaScript, allowing you to opt-in and opt-out of type-checking during compilation.

```typescript
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;
```

While using `any` can be helpful, use it sparingly as it defeats the purpose of using TypeScript.

### unknown

The `unknown` type is similar to `any`, but it is safer because you can't perform arbitrary operations on an `unknown` without first asserting or narrowing to a more specific type.

```typescript
let variable: unknown = "hello";
variable = 5;
```

### never

The `never` type represents the type of values that never occur. It's often used to represent errors or infinite loops.

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

### undefined 

`undefined` type in TypeScript is one of the primitive types and it has only

 one value: `undefined`.

```typescript
let u: undefined = undefined;
```

### null

`null` in TypeScript represents the intentional absence of any object value.

```typescript
let n: null = null;
```

## Object Types

Lastly, object types are a way of representing non-primitive types in TypeScript.

```typescript
let person: { name: string, age: number } = {
    name: 'John',
    age: 30
};
```

Here, we define a `person` object with `name` as a string and `age` as a number. With object types, TypeScript helps you ensure the shape of an object is correct throughout your code.

