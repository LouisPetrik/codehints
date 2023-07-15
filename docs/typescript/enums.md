--- 
title: Enums 
--- 

<head>
 <title>Understanding Enums in TypeScript</title>
</head>

# Enums in TypeScript

Enums or enumerations in TypeScript are a feature not traditionally available in JavaScript. They offer a convenient way to work with sets of related constants, improving readability and reducing errors stemming from typing or misspelling strings or numeric literals.

## Introduction to Enums

Enums are a way of giving more friendly names to sets of numeric or string values. They can be numeric or string-based.

### Purpose of Enums

```typescript
enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

let move: Direction = Direction.UP;
```

In this example, the `Direction` enum improves the clarity and readability of the code. Instead of using strings like "UP", "DOWN", etc., directly in the code, we use the enum. This can prevent errors like typos, which would be hard to debug.

### Underlying Representation

Enums in TypeScript are objects that map named constants to their corresponding values.

```typescript
enum Colors {
    RED = 1,
    BLUE = 2,
    GREEN = 3
}
console.log(Colors.RED); // prints 1
console.log(Colors[1]); // prints 'RED'
```

Here, `Colors` enum is an object where `Colors.RED` is `1`, `Colors.BLUE` is `2`, and `Colors.GREEN` is `3`. Additionally, enums support reverse mapping, i.e., you can access the enum member name by its value.

## Declaring Enums

### Declaring an Enum in TypeScript

Declaring an enum in TypeScript is straightforward.

```typescript
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
```

In this example, we define an enum `Days` with the names of the seven days of the week.

### Enum Member Values and Auto-incrementation

By default, enum members are assigned auto-incrementing numbers starting from `0`.

```typescript
enum Days {
    Sunday, // 0
    Monday, // 1
    Tuesday, // 2
    //...
}
console.log(Days.Sunday); // prints 0
```

Here, `Days.Sunday` is `0`, `Days.Monday` is `1`, and so forth. This auto-incrementing behavior makes it easy to work with enums without specifying the values explicitly.

### Initializing an Enum with Explicit Values

It's also possible to initialize enum members with specific values.

```typescript
enum ErrorCode {
    NotFound = 404,
    BadRequest = 400,
    Unauthorized = 401,
    //...
}
console.log(ErrorCode.NotFound); // prints 404
```

Here, the enum `ErrorCode` defines common HTTP status codes.

## Working with Enum Members

### Accessing Enum Members and Their Values

Accessing enum members in TypeScript is simple.

```typescript
enum Season {
    Spring = 'Spring',
    Summer = 'Summer',
    Autumn = 'Autumn',
    Winter = 'Winter'
}

let current: Season = Season.Summer;
console.log(current); // prints 'Summer'
```

Here, the `Season` enum defines the four seasons, and we can access the value of a member using its name.

### Enum Member Types and Type Checking

Enums can be used as types in TypeScript.

```typescript
enum Season {
    Spring = 'Spring',
    Summer = 'Summer',
    Autumn = 'Autumn',
    Winter = 'Winter'
}

let current: Season = Season.Summer;
// current = 'Rainy'; // Error: Type '"Rainy"' is not assignable to type 'Season'
```

Here, `current` is of type `Season`, and trying to assign a value not in `Season` results in a compile-time error.

### Enum Member Operations

Enums support operations like comparison and iteration.

```typescript
enum Sizes {
    Small,
    Medium,
    Large
}

// Comparison
let mySize: Sizes = Sizes.Medium;
if (mySize === Sizes.Medium) {
    console.log('Medium size selected!');
}

// Iteration
for (let size in Sizes) {
    if (!isNaN(Number(size))) {
        console.log(Sizes[size]);
    }
}
```

Here, the first part of the code demonstrates comparing enum members, and the second part demonstrates iterating over the enum members.

## String Enums

String enums are similar to numeric enums, but they don't have auto-incrementing behavior or reverse mappings.

```typescript
enum Directions {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let move: Directions = Directions.Up;
console.log(move); // prints 'UP'
```

In this example, `Directions` is a string enum, and each member must be initialized with a string literal.

## Heterogeneous Enums

TypeScript supports heterogeneous enums, i.e., enums with both numeric and string values.

```typescript
enum MixedEnum {
    Age = 25,
    Name = "John Doe"
}

console.log(MixedEnum.Age); // prints 25
console.log(MixedEnum.Name); // prints 'John Doe'
```

In this example, `MixedEnum` is a heterogeneous enum, with `Age` as a number and `Name` as a string. Note that heterogeneous enums lose some of the benefits of enums and should be used sparingly.

## Enum Constraints and Type Safety

Enums provide compile-time type safety, ensuring that only valid enum members can be used.

```typescript
enum TrafficLight {
    Red,
    Yellow,
    Green
}

let light: TrafficLight = TrafficLight.Red;
// light = 4; // Error: Type '4' is not assignable to type 'TrafficLight'
```

In this example, the compiler ensures that only `TrafficLight` members can be assigned to `light`, thus reducing runtime errors.

## Advanced Enum Techniques

### Using Enums with Union Types

Enums can be combined with union types to create more flexible type definitions.

```typescript
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

type WeekdayOrString = Weekday | string;

let day: WeekdayOrString = Weekday.Monday; // OK
day = 'Sunday'; // OK
```

In this example, `WeekdayOrString` is a union type that can take either a `Weekday` enum member or any string.

### Enums as Keys in TypeScript Objects

Enums can be used as keys in TypeScript objects.

```typescript
enum Direction {
    North,
    South,
    East,
    West
}

let distance: { [key in Direction]: number } = {
    [Direction.North]: 100,
    [Direction.South]: 200,
    [Direction.East]: 300,
    [Direction.West]: 400
};
```

In this example, `distance` is an object with `Direction` enum members as keys.

### Advanced Enum Patterns

#### Bit Flags

Enums can be used to create bit flags, which allow for storing multiple boolean values in a single numeric variable.

```typescript
enum FileAccess {
    None = 0,
    Read = 1 << 0,
    Write = 1 << 1,
    ReadWrite = Read | Write,
    All = ~None
}

let access: FileAccess = FileAccess.ReadWrite;
console.log(access); // prints 3
``

`

In this example, `FileAccess` is an enum used as a bit flag.

#### Reverse Mapping

TypeScript enums support reverse mapping, i.e., you can access an enum member name by its value.

```typescript
enum Colors {
    Red = 1,
    Blue,
    Green
}
console.log(Colors[2]); // prints 'Blue'
```

In this example, we access the name of the enum member by its value.

## Enums in JavaScript and Compatibility

### Transpilation of Enums to JavaScript

When TypeScript code with enums is transpiled to JavaScript, the enums become objects.

```typescript
// TypeScript
enum Color {
    Red,
    Green,
    Blue
}

// Transpiled JavaScript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
```

In this example, the TypeScript `Color` enum is transpiled to a JavaScript object with reverse mapping.

### Runtime Behavior of Enums in JavaScript

At runtime, enums behave as JavaScript objects.

```typescript
enum Color {
    Red,
    Green,
    Blue
}

console.log(Color.Green); // prints 1
console.log(Color[1]); // prints 'Green'
```

Here, `Color.Green` and `Color[1]` work as expected in JavaScript runtime.

### Ensuring Compatibility When Using Enums

While TypeScript enums provide many benefits, they may not be compatible with all JavaScript libraries or patterns. Always check the library documentation or test thoroughly when integrating TypeScript enums into a JavaScript project.

```typescript
enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}
respond("Alice", Response.Yes);
```

In this example, the `respond` function expects a `Response` enum member as an argument, which could be incompatible with JavaScript libraries that expect a number or a string.