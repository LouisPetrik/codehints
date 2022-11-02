---
title: Components in React.js
sidebar_position: 2
--- 

# Components in React.js

React.js is all about components. They are dynamic and reusable and makeup almost all of your UI. But what do dynamic and reusable mean in this context? 

Components in React are dynamic, as you can control their behavior, shape, and contents with JavaScript. 
Also, they are reusable as a component that can be placed almost wherever and used as much as you want. 

Let's look at creating basic components and how we can do it. 


## Creating a components

In React, every function that returns JSX (HTML with optional JavaScript) is a usable component. 
Let's create a really plain one: 

```jsx
function Greet() {
  return <p>Hello world</p>
}
```

Now, this component can be used within other components:

```jsx
function Greet() {
  return <p>Hello world</p>
}

function App() {
  return (
    <div>
      A component: 
      <Greet />
    </div>
  )
}
```

Components should be written with uppercase first letter. 

### Arrow function components 
Next to normal functions with the "function" keyword, there is a different type of functions in JavaScript: Arrow functions. 
There are marginal differences to normal functions, but overall the same things can be achieved. Therefore, we can write components 
also using arrow functions. 

```jsx
const Greet = () => {
  return <p>Hello world</p>
}
```

## React fragments 
React components always have to return a single top-level element. In case you don't understand what I mean, here is an example. 

```jsx
return <p>Hello world</p>
```
The paragraph is the top-level element and there is only a single one. The following are two top-level components, leading to an error in React: 

```jsx
return (
  <p>Hello</p>
  <p>World</p>
)
```

The need to have a wrapping component is the reason why you will often see a structure where everything returned is wrapped into a div. Yet, this isn't ideal. 
The div might cause side effects in your final HTML structure - but there is a solution. 

Using ```<> </>``` as the wrapper works just fine, but the wrapper isn't really rendered in your page, therefore not causing any side effects. 
```<> </>``` is just a shorthand for React fragments: ```<React.Fragment> </React.Fragment>```. 


## Guidelines for components 
Here are a couple tips for creating good components 

1. **Components should be pure** 
<br/> Therefore, they should not depend on external state as much as possible. 
2. **Components do not necessarily have to be used more than once.** 
<br/> It is totally fine to create components which are only embedded anywhere a single time. 
<br/>This helps to clean up your code.
3. **Components should be lazyily loaded when possible** 
<br/> Breaking down your app into components can be beneficial as each of them can be loaded lazyily. 
<br/> Therefore, the initial page load can be reduced.   

