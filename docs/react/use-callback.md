---
title: The useCallback hook in React 
--- 

# React `useCallback` Hook

## Basic Usage

The `useCallback` hook in React is a mechanism for memoizing functions. This hook helps prevent the re-creation of function instances in your components during each render, which is essential in optimizing performance, especially for components that re-render frequently.

A simple usage example involves a `handleSubmit` function in a `ProductPage` component. When you notice performance issues due to frequent re-renders, `useCallback` can be employed to cache this function:

```javascript
import React, { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    // function logic
  }, [productId, referrer]);

  return (
    <div className={theme}>
      {/* component usage */}
    </div>
  );
}
```

In this snippet, `handleSubmit` is memoized and will only be re-created when `productId` or `referrer` changes.

## When to Use It

You should consider using `useCallback`:

- When passing down a function to a child component that is wrapped in React.memo.
- If the function is a dependency of other hooks like `useEffect` or another `useCallback`.
- To prevent unnecessary re-renders of child components when the parent component renders.

For example, in a component with a button that updates a counter, you can use `useCallback` to ensure the function for incrementing the counter doesn't get recreated unless necessary:

```javascript
const increment = useCallback(() => setCount(count + 1), [count]);
```

## Dependency Array

The second argument of `useCallback` is an array of dependencies. The memoized function will only change if one of these dependencies has changed. This dependency array should include all variables and props used inside the memoized function to ensure that it updates when needed.

## Performance Optimization

While `useCallback` can be a valuable tool for optimizing performance, it's crucial to use it judiciously. Overusing `useCallback` can lead to code complexity and even adverse performance implications if used inappropriately.

## useCallback vs. useEffect

`useCallback` is used to memoize functions, while <a href="/react/use-effect">`useEffect`</a> is used to perform side effects in functional components. While they are different tools for different purposes, `useCallback` can be used inside `useEffect` as a dependency, ensuring that the effect only re-runs when the memoized function changes.

## useCallback vs. useMemo

The difference between `useCallback` and `useMemo` lies in what they memoize. `useCallback` memoizes the function itself, whereas `useMemo` memoizes the result of a function. They are both useful for performance optimization, but their use cases differ based on whether you want to cache a function or its result.

## Best Practices

- Use `useCallback` only when necessary, such as when dealing with heavy functions or passing functions to optimized components.
- Always specify dependencies accurately in the dependency array.
- Remember, memoization has a cost. It's not a silver bullet for performance issues and should be used when it makes a meaningful difference.

This cheat sheet provides a high-level overview of the `useCallback` hook in React. For a deeper understanding, experimenting with code examples in your projects and referring to the React documentation is recommended.