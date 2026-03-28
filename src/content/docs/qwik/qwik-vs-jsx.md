---
title: Qwik vs. React's JSX
---

# Qwik vs. React's JSX

While Qwik is based on TSX files, there are a couple differences between
React syntax and Qwik.

Here is a list of examples with both technologies, I found important to know.
Almost everything else works the same way.

## Basic component

**Qwik:**

```tsx
export const HelloWorld = component$(() => {
	return <div>Hello world</div>
})
```

**React:**

```jsx
export function HelloWorld() {
	return <div>Hello world</div>
}
```

## On click event

**Qwik:**

```tsx
export const App = component$(() => {
	return <button onClick$={handleClick}>Press me</button>
})
```

For anonymus arrow function within the onClick, it is also the same as for React:

```tsx
return <button onClick$={() => alert('Hello!')}>..</button>
```

**React:**

```jsx
export function Button() {
	return <button onClick={handleClick}>Press me</button>
}
```

## State

**Qwik:**

```tsx
import { component$, useStore } from '@builder.io/qwik'

export const App = component$(() => {
	const state = useStore({
		count: 0,
	})
	return (
		<>
			<p>{state.count}</p>
			<button onClick$={() => state.count++}>Add</button>
		</>
	)
})
```

**React:**

```jsx
import { useState } from "react"

export const App = () => {

    const [count, setCount] = useState(0)
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Add
            </button>
        <>
    )
}

```
