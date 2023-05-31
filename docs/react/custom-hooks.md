---
title: Custom Hooks
---

# React Custom Hooks

React custom hooks are a way to extract, share, and reuse logic that is stateful between different components in your React application. They provide the power to reuse stateful logic without changing your component hierarchy.

## What are Custom Hooks?

Custom hooks are a feature that arrived with React version 16.8 and they offer a way to extract, share, and reuse stateful logic between your components without changing your component hierarchy. Custom hooks are JavaScript functions that can use other hooks.

Here's a simple example of a custom hook:

```jsx
function useCustomHook(initialValue) {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		// Your logic here...
	}, [value])

	return value
}
```

In this example, the function `useCustomHook` is a custom hook. It takes an `initialValue` as a parameter and then uses the `useState` and `useEffect` hooks inside of it. The `useState` hook initializes the state and `useEffect` executes a function based on the value of the state.

## Building a Custom Hook

Building a custom hook in React involves creating a function that uses pre-existing hooks. This function can then be imported and used in other components. Let's create a custom hook named `useLocalStorage` that synchronizes state with local storage.

```jsx
import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			return initialValue
		}
	})

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(storedValue))
	}, [key, storedValue])

	return [storedValue, setStoredValue]
}
```

In the above example, `useLocalStorage` is a custom hook that manages the state of a value in local storage. It initializes the state using the `useState` hook with a function that checks if the key exists in local storage. If the key exists, it returns the parsed item. If it doesn't, it returns the `initialValue`. The `useEffect` hook updates the local storage whenever the state changes.

## Rules for Custom Hooks

The rules for custom hooks in React are the same as the rules for using standard hooks. The two main rules are:

1. Only call hooks at the top level of your React functions.
2. Only call hooks from React functions, not any regular JavaScript functions.

Here's an example of a custom hook that breaks these rules:

```jsx
function useBreakingHook() {
	if (someCondition) {
		useState(false) // violates the "only call hooks at the top level" rule
	}

	function nestedFunction() {
		useEffect(() => {}) // violates the "only call hooks from React functions" rule
	}
}
```

In the above code, `useState` is called inside an `if` statement, violating the first rule. `useEffect` is called from a nested function, violating the second rule. Following these rules ensures that the state and lifecycle of your hooks and components function as expected.

## Building a componentDidMount Hook

In class-based components, the `componentDidMount` lifecycle method runs once the component is added to the DOM. With hooks, you can simulate this behavior with the [useEffect](/react/use-effect) hook.

```jsx
import { useEffect } from 'react'

function useComponentDidMount(callback) {
	useEffect(() => {
		callback()
	}, [])
}
```

The `useComponentDidMount` hook uses the `useEffect` hook to simulate

the `componentDidMount` lifecycle method. The empty array as the second argument to `useEffect` ensures that it only runs once after the initial render, matching the behavior of `componentDidMount`.

## Using Third-Party Custom Hooks

There are plenty of open-source libraries that offer pre-built custom hooks you can use in your project. This saves you the time of creating common functionalities yourself. One such library is `react-use`, which provides a large collection of ready-to-use hooks.

Here's an example of using a third-party custom hook:

```jsx
import { useLocalStorage } from 'react-use'

function Component() {
	const [value, setValue] = useLocalStorage('myKey', 'defaultValue')

	// your component logic...
}
```

In this example, the `useLocalStorage` hook from the `react-use` library is used in a component. This hook works similarly to the custom `useLocalStorage` hook we created earlier. It manages state that is synchronized with local storage. This demonstrates how third-party custom hooks can provide reusable functionalities and reduce the amount of code you need to write.

Remember that whenever you're using hooks, whether they're built-in hooks, custom hooks, or third-party hooks, always follow the <code>[rules of hooks](/react/hooks-rules)</code>. If you need to dive deeper into hooks, check the official React docs for <code>[useState](/react/use-state)</code>, <code>[useEffect](/react/use-effect)</code>, and <code>[useRef](/react/use-ref)</code>. Also, if you need to learn more about components, take a look at the <code>[React components](/react/components)</code> section.
