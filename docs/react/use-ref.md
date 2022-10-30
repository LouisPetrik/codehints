---
title: useRef in React
sidebar_position: 4
---

# React's useRef hook

Originally, useRef was used to reference elements in the DOM and it still can be used for it.
Yet, it also offers a great alternative to useState, as we will see.
useRef can, just like useState, hold values. Here is, what you need to know in short:

-  useRef can hold values via the <code>.current</code> attribute
-  Altering the values useRef holds DOES NOT trigger a re-render
-  The value persist between different renders
-  useRef is completely separate from the render-cycle of the component

## Using useRef for holding values

useRef is often the ideal alternative when useState doesn't work.
useState might fail to provide a solution in these scenarios, because:

1. The state does not persist when it should do
2. Changing the state causes a re-render and often an endless loop

Here is a good example of useRef for counting the times the component re-rendered:

```jsx
import React, { useRef, useEffect, useState } from 'react'

export default function App() {
	const rC = useRef(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		rC.current += 1
	})

	return (
		<>
			<p>Component rendered: {rC.current} times</p>
			<p>Counter: {count}</p>
			<button onClick={() => setCount(count + 1)}>Add</button>
		</>
	)
}
```

## Referencing DOM elements

```jsx
import React, { useRef, useEffect } from 'react'

export default function App() {
	const pRef = useRef()

	useEffect(() => {
		const el = pRef.current
		console.log(el)
	}, [])

	return (
		<>
			<p ref={pRef}>Hello world!</p>
		</>
	)
}
```

Logs the following code on the initial render:

```javascript
HTMLParagraphElement{
    attributes: {…}, innerHTML: "Hello world!", nodeType: 1, tagName: "p"
}
```

## Differences of useRef and useState

To sum up, here are a couple differences between both hooks, from the view point of useState:

-  Values are accessed with <code>.current</code> in useRef, instead of with a single function
-  Updating values does not force a re-render, therefore, useRef will not cause the typical infinite re-render bug
-  Setting and altering values in useRef is done with assigning to <code>.current</code>
