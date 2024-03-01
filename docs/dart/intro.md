# Dart Cheat Sheet

This cheat sheet provides a quick reference for essential Dart concepts.

## Datatypes

Dart supports various data types to represent different kinds of information:

* **Numbers:** `int` (integers), `double` (floating-point numbers), `num` (either `int` or `double`).
* **Boolean:** `bool` (true or false).
* **String:** `String` (sequence of characters).
* **List:** `List` (ordered collection of elements).
* **Map:** `Map` (unordered collection of key-value pairs).

## Variables

Variables store values and can be declared using `var`, `final`, or `const`:

```dart
var name = "Alice"; // Inferred type (String)
final age = 30; // Constant value, cannot be reassigned
const PI = 3.14159; // Compile-time constant
```

### Nullable variables

Dart allows variables to be null by default. Use the null-safety operator (`!`) to access properties or call methods on nullable variables:

```dart
String? message; // Declares a nullable String
print(message?.length); // Prints null if message is null, otherwise its length
```

## Strings

Strings are sequences of characters:

```dart
String greeting = "Hello";
String multiline = '''
This is a
multiline string.
''';
```

### String interpolation

Embed variables or expressions within strings using string interpolation:

```dart
String name = "Bob";
String salutation = "Hello, $name!"; // Prints "Hello, Bob!"
```

### String operations

Strings support various operations like concatenation, comparison, and accessing characters:

```dart
String message1 = "Hello";
String message2 = " World";
String combined = message1 + message2; // Concatenation
bool isEqual = message1 == "Hello"; // Comparison
print(combined[0]); // Access first character (H)
```

## Functions

Functions are reusable blocks of code that perform specific tasks. They can take arguments and return values:

```dart
int add(int x, int y) {
  return x + y;
}

int result = add(5, 3); // Calls the function with arguments
print(result); // Prints 8
```

### Returning values

Functions can return values using the `return` statement:

```dart
String greet(String name) {
  return "Welcome, $name!";
}

String message = greet("Alice");
print(message); // Prints "Welcome, Alice!"
```

### Named parameters

Functions can have named parameters, allowing them to be called in any order:

```dart
void printInfo({required String name, int age = 0}) {
  print("Name: $name, Age: $age");
}

printInfo(name: "Bob", age: 35); // Prints "Name: Bob, Age: 35"
printInfo(age: 20, name: "Charlie"); // Prints "Name: Charlie, Age: 20"
```

### Optional positional parameters

Functions can have optional positional parameters with default values:

```dart
void greet(String name, [String? message]) {
  print("Hello, $name!");
  if (message != null) {
    print(message);
  }
}

greet("John"); // Prints "Hello, John!"
greet("Mary", "Have a nice day!"); // Prints "Hello, Mary!\nHave a nice day!"
```

### Async functions

Async functions handle asynchronous operations, allowing them to pause and wait for the operation to complete before continuing:

```dart
Future<String> fetchData() async {
  // Simulate network call
  await Future.delayed(Duration(seconds: 2));
  return "Data from server";
}

fetchData().then((data) => print(data)); // Prints "Data from server" after 2 seconds
```

### Arrow syntax

Arrow syntax provides a concise way to define functions:

```dart
String greet(String name) => "Hello, $name!";

int add(int x, int y) => x + y;

print(greet("Alice")); // Prints "Hello, Alice!"
print(add(5, 3)); // Prints 8
```

## Cascades

Cascades allow chaining method calls on the same object for a more readable flow:

```dart
User user = User(name: "Bob", age: 30)
  ..id = 123
  ..isActive = true;

print(user); // Prints User(name: Bob, age: 30, id: 123, isActive: true)
```

## Classes

Classes are blueprints for creating objects that share similar properties and behaviors:

```dart
class User {
  String name;
  int age;

  User({required this.name, required this.age});

  void printInfo() {
    print("Name: $name, Age: $age");
  }
}

User alice = User(name: "Alice", age: 30);
alice.printInfo(); // Prints "Name: Alice, Age: 30"
```

### Getters and setters

Getters and setters allow controlled access and modification of an object's properties:

```dart
class Person {
  String _name; // Private field

  String get name => _name; // Getter

  set name(String newName) {
    if (newName.length > 0) {
      _name = newName;
    } else {
      print("Name cannot be empty");
    }
  } // Setter
}

Person john = Person();
john.name = "John Doe"; // Setter is called
print(john.name); // Getter is called, prints "John Doe"
```

### `this` keyword

The `this` keyword refers to the current object instance:

```dart
class Point {
  int x;
  int y;

  Point(this.x, this.y);

  void move(int dx, int dy) {
    this.x += dx;
    this.y += dy;
  }
}

Point origin = Point(0, 0);
origin.move(3, 5);
print(origin.x); // Prints 3
print(origin.y); // Prints 5
```

### Named constructors

Named constructors provide alternative ways to create objects with different initialization options:

```dart
class User {
  final String name;
  final int age;

  User.fromNameAge(this.name, this.age);

  User.fromJson(Map<String, dynamic> json)
      : name = json['name'] as String,
        age = json['age'] as int;
}

User user1 = User.fromNameAge("Alice", 30);
User user2 = User.fromJson({"name": "Bob", "age": 25});
```

### Factory constructors

Factory constructors offer more flexibility in object creation, potentially returning existing objects or creating new ones based on logic:

```dart
class Logger {
  static final Logger _instance = Logger._internal();

  factory Logger() {
    return _instance;
  }

  Logger._internal();

  void log(String message) {
    print(message);
  }
}

Logger logger = Logger();
logger.log("This is a log message.");
```

## Mixins

Mixins allow classes to reuse functionality from other classes without inheritance:

```dart
mixin Flyable {
  void fly() {
    print("I'm flying!");
  }
}

class Bird {
  void chirp() {
    print("Chirp!");
  }
}

class Superman extends Bird with Flyable {
  void useSuperpower() {
    print("Using super power!");
  }
}

Superman clark = Superman();
clark.chirp(); // From Bird
clark.fly(); // From Flyable
clark.useSuperpower(); // From Superman
```

## Dart Command-Line Interface (CLI)

The Dart CLI (`dart`) provides tools for various development tasks:

**Running:**

* **Run Dart apps:** Use `dart run` followed by the entry point script (e.g., `dart run bin/my_app.dart`).
* **Run Dart Pad code:** Paste code directly in the Dart Pad web interface ([https://dartpad.dev/](https://dartpad.dev/)).

**Compiling:**

* **AOT compile:** Use `dart compile` to compile Dart code to native machine code for faster execution at runtime.
* **JIT compile:** By default, the Dart VM performs Just-In-Time (JIT) compilation, translating code to machine code as it's executed.

**Transpiling to JavaScript:**

* Use the `dart compile js` command to convert Dart code to equivalent JavaScript code that can run in web browsers.

**Profiling:**

* Use the `dart devtool isolate-inspect` command to launch a debugger and profile Dart applications to identify performance bottlenecks.

