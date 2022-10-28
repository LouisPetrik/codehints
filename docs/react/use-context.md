---
title: useContext in React
sidebar_position: 5
---

# React's useContext hook

While useState helps us create states in components, there is one thing left uncovered: Using the same state in multiple components.

useContext helps us to create a state-context, which can be passed to child components.
These child components are capable of accessing the state we pass.

The useContext hook enables us to use the

## Setting up useContext

All we need to include to get our example up and running is the following:

```javascript
import { createContext, useState, useContext } from 'react'
```

Then, we create context-object in the same scope as our functional components. Therefore, the context
is not bound to any specific component - we can use it almost anywhere.

```javascript
const Context = createContext()

function Child() {}

function App() {}
```

The App component is the wrapper, the component which holds the Child component.
Therefore, we pass state from App into Child using the context - App is the context provider.

```jsx
function App() {
	return (
		<Context.Provider value={stateVariable}>
			<Child />
		</Context.Provider>
	)
}
```

On the receiving end, there is the child component:

```jsx
function Child() {
  const count = useContext(Context);

  return ();
}
```

Here is a full, working code example.

## Code example

Feel free to copy this code example and try it out. When incrementing the state via the button,
the counter also updates for the child component.

```jsx
import { createContext, useState, useContext } from 'react'

const Context = createContext()

function Child() {
	const count = useContext(Context)

	return (
		<>
			<p>Child component</p>
			<p>Parent state: {count}</p>
		</>
	)
}

export default function App() {
	const [count, setCount] = useState(0)

	return (
		<Context.Provider value={count}>
			<p>count: {count}</p>
			<button onClick={() => setCount(count + 1)}>increment</button>
			<hr />
			<Child />
		</Context.Provider>
	)
}
```
