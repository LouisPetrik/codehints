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

You can explicitly specify the type of a variable using the type annotation:

```dart
String name = "Alice";
final int age = 30;
const double pi = 3.14159;
```



### Nullable variables

Dart allows variables to be null by default. Use the null-safety operator (`!`) to access properties or call methods on nullable variables:

```dart
String? message; // Declares a nullable String
print(message?.length); // Prints null if message is null, otherwise its length
```

### Late variables

Late variables are non-nullable variables that can be declared without an initial value. They must be assigned a value before being used, otherwise a runtime error occurs. This allows you to defer initialization until later in your code, potentially improving performance or readability in specific situations.

```dart
class User {
  late String name; // Declares a late variable

  void setName(String newName) {
    name = newName; // Assigns value to the late variable
  }

  void printInfo() {
    print("Name: $name"); // Can be used after name is set
  }
}

User user = User();
user.setName("Alice"); // Assigns value before using
user.printInfo(); // Prints "Name: Alice"
```

**Use late variables cautiously, as forgetting to initialize them can lead to runtime errors. Consider using null-safety or regular variables with initial values for most cases.**

### `const` and `final`

Both `const` and `final` are used to declare read-only variables, but they differ in their mutability and compile-time behavior:

* **`const`**:
    * Declares a compile-time constant.
    * The value must be known at compile time and cannot be changed.
    * Useful for constant values like PI or application configurations.
* **`final`**:
    * Declares a constant variable that can be initialized at runtime (constructor, initializer list, etc.).
    * The value cannot be changed after initialization.
    * Used for variables whose value is determined later but should not change afterwards.

**Choosing between `const` and `final` depends on when the value is known and whether it needs to be a compile-time constant.**

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

## Control Flow in Dart

Control flow statements allow your Dart code to change its execution path based on certain conditions. Here are some common control flow constructs:

### If Statements

Use `if` statements to execute code blocks conditionally:

```dart
int number = 10;
if (number > 0) {
  print("The number is positive.");
} else {
  print("The number is non-positive.");
}
```

**If-else if:**

```dart
String grade = "A";
if (grade == "A") {
  print("Excellent!");
} else if (grade == "B") {
  print("Good job!");
} else {
  print("Keep practicing!");
}
```



### Switch Statements

Use `switch` statements to efficiently handle multiple conditions:

```dart
String day = "Monday";
switch (day) {
  case "Monday":
    print("Start of the week.");
    break;
  case "Friday":
    print("Almost weekend!");
    break;
  default:
    print("Just another day in the week.");
}
```

### Guards

Guards are a concise way to express conditions and execute code blocks only if those conditions are true. They are often used within conditional expressions:

```dart
int age = 20;
String message = age >= 18 ? "You are an adult." : "You are not an adult.";
print(message); // Prints "You are an adult."
```

**Guards can improve code readability and maintainability, especially when dealing with simple conditions.**

**Remember:** Control flow statements are essential for building complex logic in your Dart programs. Choose the appropriate construct based on the specific decisions you need to make within your code.


## Loops in Dart

Loops allow you to execute a block of code repeatedly until a certain condition is met. Here are the common loop types in Dart:

### for loop

* Used to iterate over a collection of elements (like lists or strings) or a specific number of times.
* Syntax:

```dart
for (int i = 0; i < 5; i++) {
  // Code to be executed for each iteration
  print(i);
}
```

* This loop iterates 5 times, printing the value of `i` in each iteration.

### while and do-while loops

* **while loop:** Executes the code block as long as a condition is true.
* Syntax:

```dart
bool isRunning = true;
while (isRunning) {
  // Code to be executed as long as isRunning is true
  print("Running...");
  isRunning = false; // Update condition to stop the loop
}
```

* **do-while loop:** Executes the code block at least once, then continues as long as a condition is true.
* Syntax:

```dart
int count = 0;
do {
  // Code to be executed at least once
  print(count);
  count++;
} while (count < 3);
```

This loop prints 0, 1, and 2, even though the condition `count < 3` becomes false after the first iteration.

### break and continue

* **break:** Exits the loop immediately, regardless of the condition.
* **continue:** Skips the remaining code in the current iteration and jumps to the next iteration.

```dart
for (int i = 0; i < 5; i++) {
  if (i == 3) {
    break; // Exit after the third iteration
  }
  print(i);
}

for (int i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    continue; // Skip even numbers
  }
  print(i);
}
```

The first loop prints 0, 1, and 2, then exits because of the `break` statement. The second loop prints only odd numbers (1 and 3) due to the `continue` statement.

Choosing the right loop type depends on the specific needs of your code.

## Collections

Collections are groups of elements that can be accessed and manipulated in various ways. Dart offers several built-in collection types:

### Lists

* Ordered collections of elements, allowing duplicates.
* Use square brackets `[]` for creation and access.

```dart
List<String> colors = ["red", "green", "blue"];
print(colors[1]); // Prints "green"
colors.add("yellow"); // Add element to the end
```

### Sets

* Unordered collections of unique elements.
* Use curly braces `{}` for creation and check membership.

```dart
Set<int> numbers = {1, 2, 3, 2}; // Duplicates are removed
print(numbers.contains(4)); // Prints false
```

### Maps

* Unordered collections of key-value pairs.
* Use curly braces `{}` with key-value pairs separated by colons.

```dart
Map<String, String> fruits = {"apple": "red", "banana": "yellow"};
print(fruits["apple"]); // Prints "red"
fruits["orange"] = "orange"; // Add key-value pair
```

### Operators

Collections support various operators for common operations:

* **`+`:** Concatenates lists.
* **`in`:** Checks if an element exists in a collection.
* **`length`:** Returns the number of elements in a collection.
* **`isEmpty`:** Checks if a collection is empty.
* **`forEach`:** Iterates over elements and executes a function for each.

```dart
List<String> days = ["Mon", "Tue"];
List<String> weekend = ["Sat", "Sun"];
List<String> allDays = days + weekend; // Concatenation

for (String day in allDays) {
  print(day); // Prints each day
}
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


## I/O in Dart

The `dart:io` library provides functionalities for interacting with the operating system, including:

### Printing

Use `print` or `stdout.write` to print output to the console:

```dart
print("Hello, world!"); // Prints "Hello, world!" to the console
stdout.write("This "); // Prints "This " without a newline
stdout.writeln("is on a new line."); // Prints "is on a new line." with a newline
```

### Reading user input

Use `stdin.readLineSync` to read a line of user input from the console:

```dart
String name = stdin.readLineSync()!; // Reads user input and stores it in "name"
print("Hello, $name!"); // Prints "Hello, [user input]!"
```

**Note:** Using `!` after `stdin.readLineSync` is only recommended when you are sure the user will provide input, as it throws an exception otherwise. Consider alternative approaches for more robust error handling.

### Writing and reading files

Use the `File` class to interact with files:

**Writing to a file:**

```dart
final file = File('output.txt');
file.writeAsString('This is content written to the file.');
```

**Reading from a file:**

```dart
final file = File('data.txt');
String contents = await file.readAsString();
print(contents); // Prints the content of the file
```

**Remember:** The `dart:io` library can only be used in command-line applications and server-side code, not in web apps.

## Futures

Futures represent the eventual result of an asynchronous operation in Dart. They are used to handle operations that take some time to complete, allowing your code to continue execution without waiting.

**Key points about Futures:**

* **Creation:** Functions can return `Future<T>` objects, indicating they perform an asynchronous operation and will eventually return a value of type `T` (or an error).
* **Waiting for completion:** Use `await` to wait for a future to complete and obtain its result:

```dart
Future<String> fetchData() async {
  // Simulate network call
  await Future.delayed(Duration(seconds: 2));
  return "Data from server";
}

String data = await fetchData();
print(data); // Prints "Data from server" after 2 seconds
```

* **Error handling:** Futures can complete with errors. Use `catchError` or `try...catch` blocks to handle them:

```dart
Future<String> readFile() async {
  try {
    final file = File('data.txt');
    return await file.readAsString();
  } catch (error) {
    print("Error reading file: $error");
    return "";
  }
}
```

* **Chaining operations:** Use `then` or `async/await` to chain operations that depend on the result of a previous future:

```dart
Future<void> processData(String data) async {
  print("Processing data: $data");
  // Simulate processing
  await Future.delayed(Duration(seconds: 1));
  print("Data processed successfully.");
}

fetchData().then(processData); // Calls processData with data from fetchData
```

Futures provide a powerful mechanism for handling asynchronous operations in Dart, making your code more responsive and efficient.