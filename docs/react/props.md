--- 
title: Props in React.js
sidebar_position: 3 
--- 


# Props in React.js

Props stand for properties, which can be used to define the contents or behaviour of a component. 
They can be imagined like parameters to a function. Props helps us to write reusable components, as we can fill 
them with specific data. Changing props leads the component to re-rendering.  
Here is a complete overview of this easy but essential concept. 

## Passing a named prop

What is actually a HTML attribute is now the attribute of the props-object. 

```jsx
function Greet(props) {
  return <p>Hey {props.name}!</p>;
}

function App() {
  return (
    <div>
      <Greet name="Max" />
    </div>
  );
}
```

### Passing numbers and objects as props

You just learned how to pass a string into a component. But there is way more data we need to pass. 
For numbers and all types of objects, it is almost the same. 

```jsx
<Greet age={20}>
```

```jsx
<Greet person={personObj}>
```

But there is an alternative of passing a named prop to the component. 

## Props without values 

Instead of <code>name=SomeValue</code> we can just pass the name of the property, without assigning any value to it. 
When such a prop is passed, <code>props.propName</code> simply evaluates to <code>true</code>. 

```jsx
function Greet(props) {
  if (props.show) {
    return <p>Show is true</p>;
  } else {
    return <p>Show is false</p>;
  }
}

function App() {
  return <Greet show />;
}
```

## Destructuring props 

When we want to access multiple props in the receiving component, writing <code>props.propName</code> all the time 
is pretty annoying. There is a shorter way which also makes the component more understandable for others. 

Instead of 

```jsx
function Greet(props) {
  return (
    <p>
      {props.name} is {props.age}
    </p>
  )`
}
```

We can write 

```jsx
function Greet({ name, age }) {
  return (
    <p>
      {name} is {age}
    </p>
  )`
}
```

Notice how we destructure the props-object directly on top level of the function. 
An alternative way is to create constant variables for the single prop attributes. 

```jsx
function Greet(props) {
  const { name, age } = props 
  return (
    <p>
      {name} is {age}
    </p>
  )`
}
```
