---
title: Angular Reactive Forms
slug: /category/angular/reactive-forms
---

# Angular Reactive Forms Cheat Sheet

## FormControl

Angular's `FormControl` is a fundamental component in Reactive Forms, representing the smallest entity of the form, linked to an HTML input. It tracks the input value and its validation state.

```typescript
import { FormControl } from '@angular/forms';

export class AppComponent {
  name = new FormControl('');
}
```

Here, a `FormControl` named `name` is created, initially empty. It can be bound to an HTML input and is used to track its value and validation status.

## FormGroup

`FormGroup` aggregates multiple `FormControl` instances into a cohesive group. This is useful for representing a form with multiple fields as a single entity.

```typescript
import { FormGroup, FormControl } from '@angular/forms';

export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}
```

In this example, `userForm` is a `FormGroup` containing two `FormControl`s, `name` and `email`. The group manages the overall form state and values.

## FormBuilder

`FormBuilder` provides a more concise way to create forms by reducing the boilerplate code. It is a service that helps in creating instances of `FormControl` and `FormGroup`.

```typescript
import { FormBuilder, Validators } from '@angular/forms';

export class AppComponent {
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: [''],
  });
}
```

`FormBuilder` is injected and used to create a form group with `name` and `email` controls. Validators can be easily applied using this approach.

## FormArray

`FormArray` is useful for managing a collection of `FormControl`s dynamically. It allows the addition or removal of controls at runtime.

```typescript
import { FormArray, FormControl } from '@angular/forms';

export class AppComponent {
  hobbies = new FormArray([]);

  addHobby() {
    this.hobbies.push(new FormControl(''));
  }
}
```

`hobbies` is a `FormArray` to which new controls can be added dynamically, representing a list of hobbies that a user can enter.

## Validators

Validators are essential in ensuring the integrity of the data entered in the form. Angular provides built-in validators, and custom validators can also be defined.

```html
import { FormControl, Validators } from '@angular/forms';

export class AppComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
}
```

Here, the `email` control is assigned required and email validators, ensuring the input is not empty and follows a valid email format.

## Form Submission

Handling form submission in Angular involves binding the `(ngSubmit)` event to a method that processes the form data.

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <input formControlName="name">
  <input formControlName="email">
  <button type="submit">Submit</button>
</form>
```

In this template, submitting the form triggers the `onSubmit()` method, where `userForm`'s value can be processed or sent to a server.

## Form Initialization

Initializing a form typically involves setting up form controls and their default values within a component's class.

```html
import { FormGroup, FormControl } from '@angular/forms';

export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl('John Doe'),
    email: new FormControl('john@example.com'),
  });
}
```

Here, `userForm` is initialized with default values for `name` and `email`.

## Form Control Status

Inspecting the properties of a `FormControl` can provide insights into its current state, such as value, validity, and whether it has been touched or modified.

```html
<p>Name value: {{ userForm.get('name').value }}</p>
<p>Name valid: {{ userForm.get('name').valid }}</p>
```

This snippet shows how to display the value and validity status of the `name` control in the template.

## Form Reset

Resetting a form clears the values and resets the control states. This can be done for the entire form or for individual controls.

```typescript
<button type="button" (click)="resetForm()">Reset Form</button>

resetForm() {
  this.userForm.reset();
}
```

Clicking the reset button triggers `resetForm()` which resets the `userForm`, clearing all input fields and validation states. 