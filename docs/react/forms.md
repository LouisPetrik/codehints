--- 
title: React Forms
sidebar_position: 8 
--- 


# Forms in React.js

Forms are a vital part of any web application and React.js provides powerful tools to handle form-related tasks. Whether it's a simple login form or a complex multi-step registration form, knowing how to create and manage forms in React is essential for any developer working with this library. Let's dive into the intricacies of forms in React.js, looking at how to create them, control them, and handle their submission.

## Creating a Form

Creating a form in React.js is quite similar to creating a form in plain HTML. However, in React, we typically handle form data using state, which allows us to create interactive forms.

```jsx
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
```
In the above code, we have a simple form with a text input and a submit button. We're using the <code>useState</code> hook from React to create a state variable <code>name</code> which stores the current value of the input field. The <code>onChange</code> handler updates this state whenever the user types into the input field, ensuring that our state always reflects the current input value. Learn more about state in React at this [link](/react/use-state).

## Controlled Forms
A controlled form in React.js is one where the form data is handled by the state within the component. The form inputs are 'controlled' by React, which means the value of the input is bound to a piece of state and any changes to that input updates the state.

```jsx
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
```
In the above example, we've extended our form to include an email field, and we're now storing all our form data in an object in our state. This is a common pattern when dealing with forms that have multiple inputs. Our <code>handleChange</code> function now uses the name of the input field to decide which piece of state to update. This is a good example of how [React components](/react/components) can help make your code more reusable and maintainable.

## Uncontrolled Forms
In contrast to controlled forms, uncontrolled forms in React.js make use of the <code>ref</code> system instead of state. This means that the form data is handled by the DOM, and React does not track the input values.

```jsx
import React, { useRef } from 'react';

function App() {
  const nameRef = useRef();
  const emailRef

```jsx
Ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
```

The `useRef` hook creates a reference to the input elements. Instead of updating the state every time the user types into the input fields, we directly access the current value of the inputs when the form is submitted using `nameRef.current.value` and `emailRef.current.value`. This approach might be useful when dealing with form inputs that don't require real-time validation or updates. You can learn more about the `useRef` hook [here](/react/use-ref).

## Submitting Forms
React allows handling form submissions with JavaScript functions. This provides more flexibility and control over the form data.

```jsx
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name, 'Email:', email);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
```
In this example, the `onSubmit` event handler `handleSubmit` is added to the form. This function prevents the default form submission event, which would cause a page reload, and instead logs the form data to the console. After logging, it resets the form inputs by setting `name` and `email` back to an empty string.


---

Remember, the way you handle forms in React will depend on the specific needs and requirements of your project. The best approach is the one that works best for your use case.