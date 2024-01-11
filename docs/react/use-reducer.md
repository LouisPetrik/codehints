---
title: useReducer hook in React
--- 

# React.js useReducer Hook Cheat Sheet

The `useReducer` Hook in React.js is an efficient way to manage complex state logic in your components, especially when the state logic is too intricate for `useState`.

## Basic Usage

The `useReducer` Hook is used for state management in React components. It's particularly beneficial when dealing with complex state logic. This hook provides a `dispatch` method to update the state, which makes it more structured and manageable, especially in large applications.

Example:

```javascript
import { useReducer } from 'react';

function reducer(state, action) {
  // Define state update logic based on action type
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Component logic
}
```

In this structure, `reducer` is a function that determines how the state should be updated based on an action. The `initialState` is the starting state of your component.

## Dispatch

The `dispatch` function is used to send actions to the reducer function. These actions instruct the reducer how to transform the state. It's a pattern that enhances the predictability and maintainability of your state management.

Example:

```javascript
dispatch({ type: 'ACTION_TYPE', payload: data });
```

## Lazy Initialization

Lazy initialization in `useReducer` allows for more efficient state computation. It's particularly useful when the initial state is computationally expensive or needs to be derived from props.

Example:

```javascript
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  // State update logic
}

const [state, dispatch] = useReducer(reducer, initialArg, init);
```

## useState vs. useReducer

While <a href="/react/use-state">`useState`</a> is suitable for simple state logic, `useReducer` is preferred for more complex scenarios. `useReducer` offers better management of related state transitions and gives more predictable state updates, which is useful in components with complex state logic. 

## Best Practices

- Keep your reducer functions pure: no side-effects, predictable outputs for the same inputs.
- Define clear action types to understand what each action does.
- Use lazy initialization for complex initial state computation.
- Return new state objects instead of mutating the existing state.

By following these practices, you ensure a more maintainable and understandable state management approach within your React components.

This cheat sheet provides a concise overview of the `useReducer` Hook in React.js, essential for efficient and structured state management in complex components.