---
title: useId in React
---


# React.js useId Hook Cheat Sheet

## Basic Usage

The `useId` hook in React.js is a tool for generating unique IDs that are stable across server and client, aiding in avoiding hydration mismatches. It returns a string, usually including colons, that should not be used for CSS selectors or as keys in lists.

### Example
```javascript
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...
  return (
    <>
      <input type="password" aria-describedby={passwordHintId} />
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}
```

This code demonstrates generating a unique ID for accessibility attributes, ensuring IDs remain unique even when components are rendered multiple times.

## Use Cases

The `useId` hook is primarily used for linking HTML elements, such as associating labels with input fields or adding accessibility attributes like `aria-describedby`.

### Example
```javascript
import { useId } from 'react';

function FormComponent() {
  const id = useId();
  return (
    <form>
      <label htmlFor={`email-${id}`}>Email</label>
      <input type="text" id={`email-${id}`} />
      // ...
    </form>
  );
}
```

Here, `useId` creates a unique ID that can be used across different elements by adding prefixes or suffixes.

## Prefixing and Suffixing IDs

You can use the same generated ID for multiple elements by appending prefixes or suffixes to create a shared identifier.

### Example
```javascript
import { useId } from 'react';

function LoginForm() {
  const id = useId();
  return (
    <>
      <label htmlFor={`username-${id}`}>Username</label>
      <input id={`username-${id}`} type="text" />
      <label htmlFor={`password-${id}`}>Password</label>
      <input id={`password-${id}`} type="password" />
    </>
  );
}
```

This approach ensures that related elements share a base ID while maintaining their uniqueness through suffixes.

## Limitations

While `useId` is versatile, it's not suitable for all scenarios. It shouldn't be used for CSS selectors, as the generated IDs include colons. Additionally, it's not ideal for generating keys in a list; data-based keys are preferred.

## Server-Side-Rendering (SSR)

`useId` works well with server-side rendered components, generating stable IDs for both the server and client sides. However, it requires an identical component tree on both sides to ensure ID consistency.

## Best Practices

- Use `useId` for connecting HTML elements and for accessible web development.
- Avoid using `useId` for CSS selectors and list keys.
- Ensure you use `useId` in functional components only.
- When using `useId` in server-side rendering, maintain a consistent component tree across server and client.

Remember, the `useId` hook in React.js facilitates the creation of unique and stable identifiers, enhancing accessibility and reducing the risk of ID conflicts in dynamic applications.