---
title: useState in React
sidebar_position: 3
---

# React's useState hook

The useState hook enables us to set state for our component.
It serves as the replacement called just "state" in class-based components.
As you might remember, state changes lead to a re-render of the necessary parts in the DOM. This helps us 
to build dynamic interfaces. Here is an overview of how to use useState and what might bring you into trouble. 

The <a href="/react/use-ref" title="useRef hook in React">useRef</a> can be seen as the complement to useState. The big difference is updating on changes. 

## A counter component with useState

```jsx
import React, { useState } from 'react'

export default function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<p>Counter: {count}</p>
			<button onClick={() => setCount(count + 1)}>Add</button>
		</>
	)
}
```

## Save input in state

## Using multiple states

Whereas state back then was all stored in the <code>state</code> object of each class, state nowadays is stored and handled separately.
Just call useState as much as you want and store the state variable itself and the functions for updating the values.

```jsx
const [count, setCount] = useState(0)
const [name, setName] = useState(")
```

## Dangers with useState

Updating values with useState always triggers the component to re-render.
A combination of useState and useEffect in the wrong way therefore is often dangerous.

Even though the name of both variables in the brackets when using useState is up to you, there are naming conventions.
The function for updating the value is often written as "setNameOfState".

## Understanding the destructuring
