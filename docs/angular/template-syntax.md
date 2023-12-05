--- 
title: Angular Template Syntax
sidebar_position: 4
slug: /category/angular/template-syntax
---


# Angular Template Syntax

Angular Template Syntax is a powerful tool that allows developers to render dynamic content in their applications. It encompasses various methods to bind data, handle events, and manipulate the DOM in an Angular application.

## Text Interpolation

Text Interpolation is a fundamental aspect of Angular Template Syntax, enabling dynamic values to be embedded into the template. It is typically achieved using double curly braces `{{ }}` to wrap the expression. A variable like `message` can be of any data type such as string, number, or boolean. Angular automatically updates the view when this variable changes in the component. Interpolation is also useful for concatenating strings.

```html
<p>{{ message }}</p>
<p>{{ message + ' ' + name }}</p>
```

The above code demonstrates how variables `message` and `name` are displayed and concatenated in the view【12†source】.

## Property Bindings

Property Binding allows setting dynamic values to an HTML element's properties. This is achieved using square brackets `[]` around the binding expression.

```html
<img [src]="logoUrl" alt="Logo" />
<p [style.color]="color">{{ message }}</p>
<div [class.highlight]="isHighlighted">{{ content }}</div>
```

Here, `logoUrl` is bound to the `src` attribute of an `img` element, while `color` and `isHighlighted` variables dynamically change the style and class of `p` and `div` elements respectively【13†source】.

## Event Binding

Event Binding in Angular deals with handling user events like clicks and inputs. Parentheses `()` are used to wrap the event handler expression.

```html
<button (click)="onClick()">Click Me</button>
<input (input)="onInput($event)">
```

In these examples, `onClick()` is executed when the button is clicked, and `onInput($event)` can access the value of the input element【14†source】.

## Two-Way Binding

Two-Way Binding is a combination of property and event binding, represented by `[()]`. It ensures that the model and the view are updated simultaneously.

```html
<input [(ngModel)]="firstName">
```

The `ngModel` directive binds the `firstName` variable to the input element, allowing for mutual updates【15†source】.

## Control Flows

### `*ngIf`

The `*ngIf` directive in Angular is a structural directive used for conditionally rendering a template block.

```html
<div *ngIf="condition"> ... </div>
```

`*ngIf` evaluates the `condition` and renders the `div` element only if the condition is true【25†source】.

### `*ngIf` with `else`

Angular allows `*ngIf` directive to be combined with an `else` block for more complex conditional rendering.

```html
<div *ngIf="condition; else otherTemplate">
  * your content *
</div>
<ng-template #otherTemplate>
  * your other content *
</ng-template>
```

This structure enables rendering alternate content when the `condition` is false【26†source】.

### `*ngSwitch`

The `*ngSwitch` directive is used for displaying content based on a switch condition.

```html
<div [ngSwitch]="condition">
  <div *ngSwitchCase="value1">* content block value1 *</div>
  <div *ngSwitchCase="value2">* content block value2 *</div>
  <div *ngSwitchDefault>* default content *</div>
</div>
```

Different content blocks are shown depending on the value of `condition`【27†source】.

### `*ngFor`

The `*ngFor` directive is a way to render a list of items in the template.

```html
<ul>
  <li *ngFor="let item of itemList">
    {{ item.name }}
  </li>
</ul>
```

This directive iterates over `itemList`, creating a list item for each element. Angular also provides local variables like `index`, `count`, `first`, `last`, `even`, and `odd` for additional control【28†source】.

The Angular Template Syntax, with its versatile directives and binding methods, offers powerful ways to create dynamic and interactive user interfaces.