---
title: Qwik Store
--- 


# Qwik Store

Qwik store is an essential feature in the Qwik JavaScript framework that's designed to manage state in an efficient, reactive manner. In this cheat sheet, we'll explore `useStore()`, `useStore()` vs `useSignal()`, and the depth of `useStore()`.

## useStore()

`useStore()` is a hook provided by the Qwik framework for state management. It enables the components to access and manipulate state data that persists across renders.

Here's a simple example of how you might use `useStore()`:

```javascript
import { provide, useStore } from 'qwik';

function MyComponent() {
  const [counter, setCounter] = useStore('counter', 0);
  
  return (
    <button onClick={() => setCounter(counter + 1)}>
      Clicked {counter} times
    </button>
  );
}
```

In this code snippet, we have a counter that increments each time the button is clicked. The `useStore()` hook provides us with a pair: the current state and a function to update that state. Here, we've provided 'counter' as the key for our store and '0' as the initial value. Whenever the button is clicked, `setCounter` updates the state, triggering a re-render of the component.

## useStore() vs. useSignal()

While `useStore()` is used for persistent state management, Qwik also provides `useSignal()` for transient, component-specific state.

```javascript
import { provide, useSignal } from 'qwik';

function MyComponent() {
  const [flag, setFlag] = useSignal(false);

  return (
    <button onClick={() => setFlag(!flag)}>
      Toggle
    </button>
  );
}
```

In this example, `useSignal()` is used to toggle a flag state. Like `useStore()`, it returns a pair: the current state and an updater function. However, unlike `useStore()`, the state from `useSignal()` does not persist across renders. It is meant for state that is temporary and specific to a single render of a component. Thus, `useStore()` and `useSignal()` serve different purposes based on the state's lifespan and scope.

## Depth of useStore()

`useStore()` supports a depth feature, allowing nested state management. This is useful when the state is more complex, such as an object with multiple fields.

```javascript
import { provide, useStore } from 'qwik';

function MyComponent() {
  const [user, setUser] = useStore('user', { name: 'John', age: 30 });
  
  return (
    <div>
      <p>Hello, my name is {user.name} and I am {user.age} years old.</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increment age
      </button>
    </div>
  );
}
```

In this example, `useStore()` is used to manage an object state with two fields: 'name' and 'age'. The update function, `setUser`, merges the old state with the updated field, creating a new state. This showcases the depth of `useStore()`, allowing for granular state updates without affecting the other parts of the state.
