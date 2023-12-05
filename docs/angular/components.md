--- 
title: Angular Components 
sidebar_position: 3
slug: /category/angular/components
---

# Angular Components Cheat Sheet

Components are the building blocks of Angular applications. They are responsible for rendering the view and handling user interactions. Let's dive into the essential aspects of Angular components for programmers.



## Importing Components

Importing components in Angular involves a few steps to ensure they are properly integrated into the application.

```typescript
// hello-world.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
})
export class HelloWorld {
}
```

```typescript
// app.module.ts
import { HelloWorld } from './components/hello-world/hello-world.component'

@NgModule({
  declarations: [
    HelloWorld,
    // other components
  ],
})
export class AppModule { }
```

In Angular, components are defined with a TypeScript class decorated with `@Component`. This class needs to be imported and declared in the application's module (usually `app.module.ts`) to be used throughout the application.


## Selectors

Selectors in Angular are used to identify components uniquely in the component tree and define how they are represented in the HTML DOM.

```typescript
// app.component.ts
@Component({
  selector: 'my-app',
  //...
})
export class AppComponent {
  //...
}
```

The selector is a property of the `@Component` decorator, representing the tag name used in the HTML. It's essential for integrating the component into Angular's rendering flow.

## Styling

Following best practices in styling Angular components helps in maintaining clean, scalable, and maintainable code.

```typescript
// Example of naming convention
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {}
```

Consistent naming conventions like dash-delimited file names and selectors, and proper use of Angular's styling features, play a crucial role in effective styling.

## Standalone Components

Standalone components are self-contained and don't come with the need for `NgModule`. 

```typescript
import { Component } from '@angular/core';
```

## Input Properties

Managing input properties in Angular components involves creating reusable, maintainable components with clear interfaces.

```typescript
@Component({
  selector: 'app-child',
  template: '<div>{{ data }}</div>'
})
export class ChildComponent {
  @Input() data: string;
}
```

Breaking down components into smaller, reusable units with well-defined input properties enhances the maintainability and scalability of the application.

I'll compile a cheat sheet for Angular Component Lifecycle, adhering to the specified format and rules. This cheat sheet will cover essential information about Angular's lifecycle hooks, including code snippets and brief explanations. Each subtopic will be presented as a Tier-2 Markdown heading.

---

## Component Lifecycle 

### constructor()
The `constructor` in Angular is used for initializing class members and for dependency injection. It runs before any other lifecycle hook.

```javascript
constructor(private service: MyService) {
  // Initialization code
}
```

The `constructor` is typically used for dependency injection and not for significant work like API calls or initializing data.

### ngOnChanges()
`ngOnChanges` is triggered when any data-bound input properties change. It receives a `SimpleChanges` object containing current and previous property values.

```javascript
ngOnChanges(changes: SimpleChanges) {
  if (changes['inputProperty']) {
    // Respond to the change
  }
}
```

This hook is useful for reacting to changes in input properties, often used for updating internal state or re-initializing data.

### ngOnInit()
`ngOnInit` is called once, after the first `ngOnChanges`. It's used for component initialization, particularly when setting up data-bound properties.

```javascript
ngOnInit() {
  this.loadData();
}
```

This hook is ideal for initializing data, setting up subscriptions, or other tasks that should happen once and depend on component inputs.

### ngDoCheck()
`ngDoCheck` is executed with every change detection cycle, allowing for custom change detection or logic.

```javascript
ngDoCheck() {
  if (this.myCheck()) {
    // Custom change detection logic
  }
}
```

Use this for more granular control over change detection processes in the component.

### ngAfterContentInit()
`ngAfterContentInit` is called after Angular projects external content into the component. This happens once after the first `ngDoCheck`.

```javascript
ngAfterContentInit() {
  // Code for after content projection
}
```

It's used for initialization work involving content children.

### ngAfterContentChecked()
Invoked after every check of component's content. It follows `ngAfterContentInit` and subsequent `ngDoCheck`s.

```javascript
ngAfterContentChecked() {
  // After content checked logic
}
```

This hook is used for actions after Angular checks the content projected into the component.

### ngAfterViewInit()
Called once after the first `ngAfterContentChecked()`. It's used for initialization that requires component views.

```javascript
ngAfterViewInit() {
  // Access view children, setup view-related tasks
}
```

This is the right place for any DOM interactions or initializations that depend on template views.

### ngAfterViewChecked()
Runs after the component's view, and child views have been checked. It follows `ngAfterViewInit` and subsequent `ngDoCheck`s.

```javascript
ngAfterViewChecked() {
  // Handle tasks after every check of the component's view
}
```

Ideal for tasks that need to happen after every check of the component’s view and child views.

### ngOnDestroy()
`ngOnDestroy` is the cleanup phase just before Angular destroys the component. Use this to unsubscribe observables and detach event handlers.

```javascript
ngOnDestroy() {
  this.subscription.unsubscribe();
}
```

This is crucial for preventing memory leaks, especially in single-page applications.

---

