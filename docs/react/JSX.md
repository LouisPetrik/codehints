---
title: React JSX 
sidebar_position: 2
---

# React JSX

React JSX is a powerful syntax extension for JavaScript, used with the React library to write UI components. It may look like HTML in your JavaScript, but it's much more than that. JSX provides syntactic sugar for `React.createElement()` function calls, making it easier and cleaner to define your components.

Today, JSX is even so popular that other frameworks and libraries like [Solid](https://www.solidjs.com/) and [Qwik](/category/qwik) are using it too as their way to build components.

## What is JSX?

JSX, or JavaScript XML, is a syntax extension for JavaScript. It allows you to write HTML-like code inside your JavaScript code, leading to a more intuitive and simpler way to structure your React components.

```jsx
const element = <h1>Hello, world!</h1>;
```

In the above code, we're defining a JSX element which represents an HTML-like `<h1>` tag with the content "Hello, world!". This is not a string nor HTML; it's JSX that's going to be transformed into JavaScript function calls under the hood by React.

## Rules of JSX

While JSX is flexible and intuitive, there are some rules that you need to follow to ensure it can be correctly translated into JavaScript.

```jsx
// Correct
<div>
  <h1>Hello World</h1>
</div>

// Incorrect
<div>
  <h1>Hello World</div>
```

The first rule is that all tags must be closed. In the incorrect example above, the `<h1>` tag isn't closed, which would lead to an error. Another important rule is that components must return a single root JSX element. If you want to return multiple elements, they must be wrapped in a single parent element, like a `<div>` or a `<React.Fragment>`.

## JS Expressions in JSX

JSX isn't just for static content; you can also embed JavaScript expressions inside your JSX code using curly braces `{}`.

```jsx
const name = 'React Developer';
const element = <h1>Hello, {name}</h1>;
```

In this example, we're embedding a JavaScript variable `name` inside the JSX. The content within the curly braces is treated as regular JavaScript, evaluated, and then included in the output.

## Fragments

React Fragments allow you to return multiple elements from a component without adding an extra node to the DOM. This is especially useful when a wrapping `<div>` would mess up the CSS styles in your app.

```jsx
import React from 'react';

function Example() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

In the above code, `<React.Fragment>` is used to wrap multiple child components. This results in a cleaner DOM without unnecessary `<div>` wrappers.

## HTML Attributes

In JSX, you can use HTML attributes to specify properties for your elements. However, since JSX is closer to JavaScript than to HTML, some attribute names are different from their HTML counterparts.

```jsx
const element = <div className="App">Hello, world!</div>;
```

In the above code, we're using `className` instead of `class` to set the CSS class of the `<div>`. This is because `class` is a reserved keyword in JavaScript.

## Conditionals

Conditionals are a fundamental part of any programming language, and you can use them in JSX too. One common way to use conditionals in JSX is by using the ternary operator.

```jsx
const isLoggedIn = true;
const element = <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h

}</h1>;
```

The above code uses a ternary operator to check if the user is logged in. If `isLoggedIn` is `true`, it will display "Welcome back!", otherwise it will display "Please log in.".

There are different ways to include conditionals in JSX, including the ternary operator (`? :`), the logical AND operator (`&&`), or conditionally assigning JSX to a variable. 

The ternary operator is a compact syntax for writing a conditional expression【9†source】.

```jsx
const isPacked = true;
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```
In this example, it reads as "if `isPacked` is true, then render `name + ' ✔'`, otherwise render `name`"【9†source】.

The logical AND operator (`&&`) is a common shortcut you’ll encounter in React components. It's often used when you want to render some JSX when the condition is true, or render nothing otherwise.

```jsx
const isPacked = true;
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```
This can be read as "if `isPacked` is true, then render the checkmark, otherwise, render nothing"【10†source】. Be cautious when putting numbers on the left side of `&&`. For example, `messageCount && <p>New messages</p>` will render `0` rather than nothing when `messageCount` is `0`. To fix it, make the left side a boolean: `messageCount > 0 && <p>New messages</p>`【12†source】.

Finally, you can conditionally assign JSX to a variable. This style is the most verbose, but it’s also the most flexible.

```jsx
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}
```
In this example, we first assign the default content to the variable `itemContent`. If `isPacked` is true, we reassign a JSX expression to `itemContent`. Finally, we embed the variable with curly braces in the returned JSX tree【13†source】【14†source】.

---

That concludes our cheat sheet for React JSX. With this guide, you should now have a better understanding of JSX and its usage in React. For more details about React components and managing state in React, you can check out our guides on [React components](/react/components) and [how to use state in React](/react/use-state). If you're curious about how JSX compares to other similar technologies, you can read our comparison of [JSX vs Qwik](/qwik/qwik-vs-jsx).