---
title: Shorthands in React.js
sidebar_position: 6
---

# Shorthands in React.js' JSX

As shorthands, developers consider a quicker and concise way to write syntax, that solves the same problem.
A lot of the shorthands we know from pure JavaScript can be used within React's JSX to make our code more readable.
Here is a list of examples.

Nearly all of these examples are now considered a standard when building apps, therefore, they are very important.

## Conditional / ternary shorthand

Just before the "?" there is the expression which will be evaluated.
In case this expression is true, the first expression after the "?" is returned.
In case it is falses, the code behind the ":" is returned.

```jsx
export default function App() {
	const loaded = false

	return <>{loaded ? <p>Loaded!</p> : null}</>
}
```

## Spread operator

The spread operator <code>...data</code> returns the data without its surrounding structure, therefore only returns the elements.
This works for almost all types of objects. We can use it for writing one expression instead of multiple ones, for example, when passing data:

```jsx
function Person(props) {
	return (
		<p>
			{props.name} is {props.age} years old
		</p>
	)
}

function App() {
	const max = { name: 'Max', age: 21 }
	return <Person {...max} />
}
```

## Destructuring

With this feature, we can split up data from one object into as much separat objects as we want to.
Usually, we split the attributes of the object into new variables, each holding the value linked to one attribute.

Back to our example from above, we can extract both name and the age into single variables for making the code sharper.

```jsx
function Person(props) {
	const { name, age } = props
	return (
		<p>
			{name} is {age} years old
		</p>
	)
}
```

## Implicit return

This is the concept most React developers are the most used to.
Instead of using the return keyword, one can use the normal brackets <code>( )</code> to return data.

We can write:

```jsx
const app = () => (
	<>
		<h1>My app</h1>
		<p>Hello world</p>
	</>
)
```

instead of

```jsx
const app = () => {
	return (
		<>
			<h1>My app</h1>
			<p>Hello world</p>
		</>
	)
}
```


## Nullish Coalescing 

Nullish coalescing (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

```jsx
const Component = ({ title }) => {
  const displayTitle = title ?? 'Default Title';
  
  return (
    <h1>{displayTitle}</h1>
  );
};
```

In this example, the display title defaults to 'Default Title' when the `title` prop is `null` or `undefined`. This provides a more concise and readable method of handling default values than traditional methods.

## Conditional Rendering with Logical '&&'

In React, you can create elements conditionally using logical '&&' operator. This is especially useful when you want to conditionally render components based on certain state or prop values.

```jsx
const Message = ({ user }) => (
  <div>
    {user && <p>Welcome, {user.name}</p>}
  </div>
);
```

In this code snippet, the message "Welcome, {user.name}" will only render if `user` is truthy. This removes the need for more verbose if-else conditions.


## Short-circuit Evaluation

Short-circuit evaluation in JavaScript allows for more concise and potentially performance-enhancing code, by ensuring that the second part of an AND (`&&`) operation is not evaluated if the first part is falsy.

```jsx
const UserProfile = ({ user }) => {
  return user && (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
```

In this example, the <code>UserProfile</code> component will only attempt to access properties of `user` (like `user.name` and `user.email`) if `user` exists (i.e., if `user` is truthy). This technique prevents errors when trying to access properties of `null` or `undefined`, and can make your React.js code more robust and readable.


## React.Fragment 

Instead of using React.Fragment as the wrapper element for a component like this

```jsx
return (
  <React.Fragment> 
    <p>Hello</p>
    <p>World</p>
  </React.Fragment>
)
```

There is a shorter way today: 

```jsx
return (
  <>
    <p>Hello</p>
    <p>World</p>
  </>
)
```