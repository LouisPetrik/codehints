---
title: Introduction to React.js
sidebar_position: 1
slug: /category/react
---

import Bar from "@site/src/components/Bar";

# What is React.js?

React is a JavaScript front-end library for creating user interfaces, developed by Facebook in 2013.

Compared to competitors like Vue and Anguar, React is a library - not a framework.
Does it make React worse than the others mentioned? No, it only means, Vue and Angular for example are shipping
their own, stacked environment with tools for fetching data, routing and state management.
Meanwhile React primarily offers its key-feature: A way to build dynamic components for the web.
Everything else needs to be installed via third parties.

This sounds bad, but actually makes React a library driven by the community, with great innovations every once in a while.
Today, there are dominant tools for React in the market, which are not officially associated with Facebook's React team.
Such tools are Next.js, react-router, styled-components, react-query and so on. All of them are free to use, open source and backed by a hugee community. This is what drives React.

React started a new way of thinking components, and gave birth to JSX, a format combining
Since then, JSX and its TypeScript variant TSX are used even outside of the React world.
Newer frameworks and libraries like Solid and <a href="/qwik/qwik-vs-jsx/">Qwik</a> are using it too as their way to build components.

## Hello world in React.js

```jsx
import React from 'react'

export default function App() {
	return <p>Hello world!</p>
}
```

## More code examples

### Building a counter in React

```jsx
import React, { useState } from 'react'

export default function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<p>Counter: {count}</p>
			<button onClick={() => setCount(count + 1)}>increment</button>
		</>
	)
}
```

### Passing props in React

```jsx
import React from 'react'

export default function App() {
	function GreetUser(props) {
		return <p>Hello {props.name} </p>
	}

	return (
		<>
			<p>My webappp</p>
			<GreetUser name={'Max'} />
		</>
	)
}
```

### Fetching and rendering data

```jsx
import React, { useEffect, useState } from 'react'

export default function App() {
	const [task, setTask] = useState(null)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((json) => setTask(json))
	}, [])

	return <>{task ? <p>Task name: {task.title}</p> : <p>loading..</p>}</>
}
```

## Author's Notes

React was gifted with new life when hooks were introducted. Since then, React doubled down on their position as the top UI-library, in my opinion.

## Sources

As sources, the official documentation is used.

## Additional Ressources

-  [Official Documentation](https://reactjs.org/docs/getting-started.html)
-  [Finding Components](https://react.parts/)
