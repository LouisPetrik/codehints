--- 
title: Angular Signals
slug: /category/angular/signals
--- 


# Angular Signals Cheat Sheet

Angular signals, an exciting feature introduced in Angular v16, offer a new way to make our code more reactive and improve performance by providing better change detection【8†source】.

## What Are Signals?

Signals in Angular are a combination of a variable and a change notification mechanism. Unlike regular variables, signals notify about value changes, making them reactive primitives. They are synchronous, always have a value, and are particularly useful for change detection in templates. However, they're not intended for asynchronous operations like those handled by RxJS and Observables【9†source】.

```html
<!-- Reading a signal in an Angular template -->
<span>{{ count() }}</span>
```

## Writable Signals

Writable signals in Angular allow manipulation of their values through API functions like `.set()`, `.update()`, and `.mutate()`. These functions enable direct value changes, updates through calculations or string manipulations, and mutations of complex data structures like objects or arrays【20†source】.

### Creating the Signal

To create a writable signal, declare a new variable using the `signal()` function with an initial value:

```javascript
import { signal } from '@angular/core';

export class App {
  yourSignalVariable = signal(yourSignalValue);
}
```

### Changing the Signal with .set()

The `.set()` method directly replaces the signal value:

```javascript
this.userIsLogged.set(true); // For login
this.userIsLogged.set(false); // For logout
```

### Changing the Signal with .update()

Use `.update()` for more complex value changes:

```javascript
this.userPassword.update(
  (value) => (value = `${value}-passwordEncryption`)
);
```

### Changing the Signal with .mutate()

For complex data structures, `.mutate()` is recommended:

```javascript
this.citiesIWantToVisit.mutate((cities) => {
  cities.forEach((city) => {
    if (city.name != 'Phoenix') return;
    city.visited = true;
  });
});
```

## Computable Signals

Computable signals depend on other variables and update automatically when those variables change. They are read-only and cannot be modified directly with methods like `set()`, `update()`, or `mutate()`:

```javascript
totalPrice = computed(() => this.selectedVehicle().price * this.quantity());
color = computed(() => this.totalPrice() > 50000 ? 'green' : 'blue');
```

## Reading Signals

To read a signal's value, invoke it as a getter function:

```javascript
console.log(count()); // Reads the signal value
```

In Angular templates, signals are bound and automatically update the view on changes. They are treated as regular properties and can be interpolated with the `{{ }}` syntax【31†source】【32†source】.

## Effects

Effects in Angular are used when code reacting to signal changes has side effects, such as API calls or logging. The `effect()` function runs whenever there's a change in any dependent signal:

```javascript
effect(() => console.log(this.selectedVehicle()));
```

Effects should not alter the value of signals; for signal-based changes, use computed signals instead【14†source】.

This cheat sheet provides an overview of the fundamental aspects of Angular Signals, a powerful feature for creating more reactive and performance-efficient Angular applications.