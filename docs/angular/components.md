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

## Lifecycle

Understanding and managing the lifecycle of Angular components is essential for effective application development.

```typescript
@Component({
  //...
})
export class ExampleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    // Component initialization
  }

  ngOnDestroy() {
    // Cleanup logic
  }
}
```

Angular components go through various lifecycle stages, from initialization to destruction. Lifecycle hooks like `OnInit` and `OnDestroy` allow developers to perform specific actions at different stages of a component's lifecycle.

This cheat sheet provides a starting point for understanding Angular components, their structure, and usage within an Angular application.