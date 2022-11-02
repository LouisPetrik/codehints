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