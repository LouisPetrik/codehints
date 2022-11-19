---
title: Styled Components - CSS in JS for React
slug: /category/styled-components
sidebar_position: 1
---

<img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="100px"/>

Styled components is a React.js for CSS within JSX. 
This means we can write CSS directly in our components' files. But why should we do it?
This concept enables us to make CSS more dynamic. For example, we can use state and props to define our CSS. 
In the build process, styled-components doesn't bundle our CSS into a .css file. 


## Hello world in styled components

```jsx
import styled from 'styled-components'

const StyledH1 = styled.h1`
	color: green;
	font-family: Arial, Helvetica, sans-serif;
`
function App() {
	return <StyledH1>Hello world</StyledH1>
}
```

## Getting started with styled-components

Getting started is easy. All you need to do is install the required package to get a first up and running example.

<p>Run: <code>npm install styled-components</code></p>

<p>or: <code>yarn add styled-components</code></p>

Then, import styled components as in the example above with: <code>import styled from "styled-components"</code>

Now, let's learn the absolute basics.

## Basics of styled-components

There are two things you should now.

1. **Use CSS as you know it**
   When using CSS natively in React, you are forced to use this weird JS-compatible syntax, which turns
   <code>font-famly: Arial</code> into <code>fontFamily: Arial</code>. The reason is, that CSS's <code>-</code> and other characters would mislead the compilation process.
   In styled-components, all the CSS is wrapped into a string. Therefore, you can use CSS as you know it.
2. **Call the element you want to style**
   At first, styled-components' sytnax looks a bit weird. You don't need to care so much about it. Just make sure you
   call the HTML element as an attribute on the styled-function and set the backticks directly behind it. That's it.
   <code>styled.p`, styled.div`</code> and so on.

## Additional Ressources

-  [Official Documentation](https://styled-components.com/)
-  [Official Blog](https://medium.com/styled-components)
-  [Single page Cheat sheet](https://codingcheats.io/styled-components/)
