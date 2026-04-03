---
title: Higher-Order Components in React.js
---

# React Higher-Order Components (HOCs)

React higher-order components, often abbreviated as HOCs, present a unique technique to reuse component logic in React applications. Similar to higher-order functions in JavaScript, these HOCs enable you to augment your existing components with additional properties or behavior.

## What are HOCs?

Higher-order components (HOCs) in React are functions that take a component and return a new component with additional props or behaviors. HOCs allow for code reuse, logic abstraction, and props manipulation. This concept in React shares a close resemblance with [higher-order functions in JavaScript](/javascript/functional-javascript#higher-order-functions).

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent)
```

In the code snippet above, `higherOrderComponent` is a function that accepts a `WrappedComponent` as its argument. It then returns an `EnhancedComponent`, which is a version of the `WrappedComponent` that has been augmented with additional properties or behaviors.

## When to use HOC Components

Higher-order components are particularly useful when you need to apply the same pattern of behavior or properties to several components within your application. They can help prevent redundancy and keep your React code DRY (Don't Repeat Yourself).

```jsx
function withLoadingIndicator(WrappedComponent) {
	return function EnhancedComponent(props) {
		if (props.isLoading) {
			return <div>Loading...</div>
		}
		return <WrappedComponent {...props} />
	}
}

const ListWithLoadingIndicator = withLoadingIndicator(ListComponent)
```

In the above code, `withLoadingIndicator` is a HOC that adds a loading indicator to any component passed to it. The enhanced component, `ListWithLoadingIndicator`, will now display a loading indicator if the `isLoading` prop is true.

## Example

Let's create a higher-order component that injects a `user` prop into the wrapped component. It's a common practice to provide components with user data in many React applications.

```jsx
function withUser(WrappedComponent) {
	const user = { name: 'John', age: 25 } // This could be from a user context or API.

	return function EnhancedComponent(props) {
		return <WrappedComponent user={user} {...props} />
	}
}

const UserGreeting = withUser(function ({ user }) {
	return <p>Hello, {user.name}!</p>
})
```

In this example, `withUser` is a HOC that passes a `user` prop to the `WrappedComponent`. The `UserGreeting` component, when rendered, will display a greeting to the user named 'John', which is the user object we've defined in `withUser`.

## What to not do

While higher-order components are a powerful tool, there are certain practices that can lead to confusing behavior:

-  Avoid manipulating the original component's prototype. This can introduce side effects that can be hard to debug.
-  Don't use HOCs inside the render method. This can lead to unanticipated component unmounting and remounting, causing loss of component state.
-  Be mindful of prop collisions. Since HOCs inject props into the wrapped component, there might be conflicts if the wrapped component already has a prop with the same name.

```jsx
// Don't do this
render() {
  // A new version of EnhancedComponent is created on every render
  const EnhancedComponent = hoc(MyComponent);
  // That causes the entire subtree to unmount/remount each time!
  return <EnhancedComponent />;
}
```

In the above example, using a HOC inside a render method is demonstrated, which you should avoid doing. This is because it leads to the creation of a

new `EnhancedComponent` on every render, causing the entire subtree to unmount and remount, leading to a loss of state.

Higher-order components bring great benefits when it comes to creating maintainable and reusable [React components](/react/components). Understanding and utilizing them effectively can greatly enhance your productivity and the quality of your React applications.
