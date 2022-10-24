---
title: useEffect
sidebar_position: 3
---

# React's useEffect hook

## Introduction

The useEffect hook is the most weird hook available in React.
In times of class-based React components there was nothing like this hook - it turns out, useEffect combines
a couple of things, we used seperated methods before:

<ul>
    <li>componentDidMount</li>
    <li>componentDidUpdate</li>
    <li>componentDidUnmount</li>
    <li>etc.</li>
</ul>

## Running useEffect

It is neccessary to import the hook from the core of React.
Make sure to write the hook on top level of the components-function
scope itself.

```jsx
import { useEffect } from 'react'

function App() {
	useEffect(() => {})

	return <p>Hello world</p>
}
```

As you can see, this is the structure of useEffect:

```javascript
useEffect(function, optional array)
```

In the following we'll keep it short with the code snippets, only portraing the hook itself.

:::caution

Make sure to turn of strict mode when trying out useEffect, as
strict mode will run components twice in development, creating unwanted
executions of useEffect

:::

## useEffect running on every render

As I described on top, the array passed into useEffect is optional.
When leaving it out like this:

```javascript
useEffect(() => {
	console.log('Rendered!')
})
```

useEffect will execute on every single render. These renders include updating of data in the DOM
and the initial render of the component.

:::info

Passing no array at all like before and passing an empty array leads to different behavior. We'll cover this now.
:::

## useEffect running after mounting

When passing an empty array, useEffect will be run only after the component mounted.
On DOM updates, it won't be run again.

```javascript
useEffect(() => {}, [])
```

Mounting includes re-mounting the component on the page, after it was unmounted. Therefore, it may not only be executed
after loading the page in the browser.

## useEffect running on unmounting

As useEffect combines the methods we know from class-based components,
there is also something for handling the removal of components: unmounting.

The function which is returned in useEffect is executed, when the component is unmounting.

```javascript
useEffect(() => {
	console.log('rendered')

	return () => {
		console.log('is unmounted')
	}
}, [])
```

## useEffect running on certain updates

The hook can also execute only when certain data changes. For example, we can pass state variables into
it, making useEffect execute when we alter the state:

```javascript
const [count, setCount] = useState(0)

useEffect(() => {
	console.log('count is updated')
}, [count])
```

## Try it out

The following is the React code I tried out the useEffect hook at first.
Feel free to copy it and play with it yourself.

```jsx
import { useState, useEffect } from 'react'

function Bar() {
	useEffect(() => {
		console.log('rendered')

		return () => {
			console.log('is unmounted')
		}
	}, [])

	return <b>Bar component</b>
}

function App() {
	const [count, setCount] = useState(0)
	const [visible, setVisible] = useState(false)

	return (
		<div className="App" role="main">
			{visible ? <Bar /> : null}

			<button onClick={() => setVisible(!visible)}>Toggle visiblity</button>

			<p>count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
```
