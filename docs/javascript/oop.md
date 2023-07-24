---
title: Object-oriented JavaScript 
--- 

# Object-oriented JavaScript

JavaScript is a powerful, flexible language that allows for multiple programming paradigms, including procedural, <a href="/javascript/functional-javascript">functional</a> and Object-oriented Programming (OOP). OOP is a style of coding that allows you to create and interact with objects in a structured way. In this cheat sheet, we'll cover key concepts of Object-oriented JavaScript to guide you in applying these techniques to your programming tasks.

## OOP Key Principles

Object-oriented programming revolves around the concepts of objects and classes. The fundamental principles guiding OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction.

Here's a basic example demonstrating encapsulation:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayCar() {
    return `${this.make} ${this.model}`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.displayCar()); // Outputs: "Toyota Corolla"
```

In this example, a class `Car` is defined with a constructor and a method `displayCar()`. This showcases encapsulation, where data (properties) and methods are wrapped inside a class.

## Creating Classes

In JavaScript, classes are a template for creating objects. They encapsulate data with code to manipulate that data.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
```

The `Animal` class is a basic structure for creating objects with a name property and a speak method. The `constructor` method is a special method for creating and initializing an object.

## Creating Objects

Objects are instances of a class. Once a class is defined, we can instantiate new objects from it.

```javascript
let dog = new Animal('Dog');
dog.speak(); // Outputs: "Dog makes a noise."
```

Here, `dog` is an object of the `Animal` class, created using the `new` keyword.

## Working with Classes

### Extends

The `extends` keyword in JavaScript is used to create a class that is a child of another class.

```javascript
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rover');
dog.speak(); // Outputs: "Rover barks."
```

In the example above, `Dog` is a subclass (or child class) of `Animal` and it overrides the `speak` method of the parent class.

### Super

The `super` keyword is used to call corresponding methods of the parent class. This is particularly useful in the case of the constructor of the child class.

```javascript
class Dog extends Animal {
  speak() {
    super.speak();
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rover');
dog.speak(); // Outputs: "Rover makes a noise. Rover barks."
```

In this code, `super.speak()` is called before `Dog`'s `speak()` method, which results in both methods running when `dog.speak()` is called.

## Prototypes

### Prototypes and Prototype Chains

In JavaScript, each object has a link to a prototype object. When trying to access a property that does not exist in an object, JavaScript tries to find this property in the prototype of this object.

```javascript
let animal = {
  kind: 'animal',

  getKind: function() {
    return this.kind;
  }
}

let dog = Object.create(animal);
dog.kind = 'dog';

console.log(dog.getKind()); // Outputs: "dog"
```

In the above example, the `dog` object is linked to the `animal` object. The `animal` object is now the prototype of `dog`.

### Inheriting Properties and Methods using Prototypes

JavaScript objects can inherit properties and methods from a prototype.

```javascript
let animal = {
  makesSound: function() {
    console.log('noise...');
  }
}

let dog = Object.create(animal);
dog.makesSound(); // Outputs: "noise..."
```

Here, `dog` object inherits the `makesSound` method from its prototype `animal`.

## Constructors and Prototypes

### Constructors vs. Prototypes

A constructor is a function that is used to instantiate a new object, whereas the prototype is an object instance that is attached to every object created from the constructor.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
}

let dog = new Animal('Dog');
dog.speak(); // Outputs: "Dog makes a noise."
```

Here, the constructor `Animal` has a `speak` method attached to its prototype, and every object created using `new Animal` has access to this method.

### Modifying Prototypes

Prototypes can be modified to add new properties or methods, which will then be accessible to all objects of that type.

```javascript
Animal.prototype.eat = function() {
  console.log(`${this.name} eats.`);
}

dog.eat(); // Outputs: "Dog eats."
```

In this example, the `eat` method is added to the `Animal` prototype and it is immediately available to all instances of `Animal`, including `dog`.

## OOP JavaScript Patterns

### Singleton Pattern

The Singleton pattern restricts a class from instantiating multiple objects. It is used where only a single instance of a class is required to control actions.

```javascript
let Singleton = (function () {
  let instance;

  function createInstance() {
    return { text: "I am an instance" };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2);  // Outputs: true
```

### Factory Pattern

The Factory pattern is a creational pattern that provides a way to create objects in a super-class and allows subclasses to alter the type of objects that will be created.

```javascript
class AnimalFactory {
  createAnimal(type) {
    let animal;
    if (type === 'Dog') {
      animal = new Dog();
    } else if (type === 'Cat') {
      animal = new Cat();
    }
    animal.type = type;
    return animal;
  }
}
```

### Module Pattern

The Module pattern is used to create private and public encapsulation for classes in JavaScript.

```javascript
let myModule = (function () {
  let privateVariable = 'private';

  function privateMethod() {
    return 'This is a private method';
  }

  return {
    publicMethod: function() {
      return 'Public can see me!' + privateMethod();
    }
  };
})();

console.log(myModule.publicMethod()); // Outputs: "Public can see me! This is a private method"
```

### Observer Pattern

The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs.

```javascript
class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers

.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
```

## Unit Testing for OOP

Unit testing in OOP JavaScript typically involves testing individual methods of a class. One common unit testing framework used in JavaScript is Jest.

```javascript
const Animal = require('./Animal'); // Assume you have Animal class in Animal.js

test('check if the animal speaks', () => {
  let testAnimal = new Animal('Test');
  expect(testAnimal.speak()).toBe('Test makes a noise.');
});
```

In this code, a unit test is written for the `speak` method of the `Animal` class. Jest provides the `test` and `expect` functions to facilitate testing.