---
title: React Styled Components Cheat Sheet
slug: /category/styled-components
sidebar_position: 1
---

<img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="100px"/>

# React styled-components

Styled-components is a library for React that enables you to style your components directly within your JavaScript code. By adopting the best parts of CSS, this approach makes it possible to maintain the separation of concerns and ensures that your styles are scoped to the component, reducing the risk of unwanted side effects.

## Getting started

In order to start using styled-components, you need to install the library first. It can be done with npm or yarn.

```bash
npm install styled-components
```

or

```bash
yarn add styled-components
```

Once installed, you can import it in your React component file.

```javascript
import styled from 'styled-components'
```

By importing <code>styled</code>, you gain access to a function that generates styled React components.

## Styling a component

With styled-components, you can create a new styled component by calling a method on the imported <code>styled</code> object, passing your CSS as a template literal.

```javascript
const Button = styled.button`
	background: turquoise;
	border-radius: 3px;
	color: white;
	margin: 0 1em;
	padding: 0.25em 1em;
`

// Usage in a component
function App() {
	return <Button>Click me</Button>
}
```

Here we've created a <code>Button</code> component that has its own styles. These styles will only apply to this component and won't leak to others.

## Extending styles

Sometimes you might want to create a new component that shares some styles with an existing one, but adds or overrides some properties. In this case, you can use the <code>styled</code> function again on an existing styled component.

```javascript
const PrimaryButton = styled(Button)`
	background: palevioletred;
`

// Usage
function App() {
	return <PrimaryButton>Click me</PrimaryButton>
}
```

Here <code>PrimaryButton</code> inherits all styles from <code>Button</code> but overrides the background color.

## Props

Styled-components have full access to the props passed to the component. This makes it possible to adjust your styles based on the props' values.

```javascript
const Button = styled.button`
	background: ${(props) => (props.primary ? 'palevioletred' : 'turquoise')};
	color: white;
`

// Usage
function App() {
	return (
		<>
			<Button primary>Primary Button</Button>
			<Button>Secondary Button</Button>
		</>
	)
}
```

Here, we use a function that takes the component's props as its argument to determine the background color. You can learn more about props in React [here](/react/props).

### Conditionals as props

We can also use more complex conditions within our style rules. This allows us to create styles that react to the component's state or props in a more sophisticated manner.

```javascript
const Button = styled.button`
	background: ${(props) => (props.primary ? 'palevioletred' : 'turquoise')};
	color: ${(props) => (props.disabled ? 'grey' : 'white')};
`

// Usage
function App() {
	return (
		<>
			<Button primary>Primary Button</Button>
			<Button disabled>Disabled Button</Button>
		</>
	)
}
```

In this example, we use a conditional statement to style the button differently if it's disabled.

### Theme props

Styled-components provides a <code>ThemeProvider</code> component that can pass a theme to all its child components.

```javascript
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'palev

ioletred',
  secondary: 'turquoise',
};

const Button = styled.button`
  background: ${props => props.theme.primary};
`;

// Usage
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Themed Button</Button>
    </ThemeProvider>
  );
}
```

In this example, we're providing a theme object to the <code>ThemeProvider</code> which is then accessible to all styled-components through the <code>theme</code> prop.

## Styling existing components

Styled-components can also be used to style existing (either built-in or third-party) React components.

```javascript
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
	color: palevioletred;
`

// Usage
function App() {
	return <StyledLink to="/somewhere">Go Somewhere</StyledLink>
}
```

In this case, we're styling a <code>Link</code> component from the react-router-dom library.

## Connecting components

Styled-components can reference other components in their styles, which can be a powerful pattern in some cases.

```javascript
const Button = styled.button`
	color: palevioletred;
`

const Container = styled.div`
	${Button} {
		margin-top: 1em;
	}
`

// Usage
function App() {
	return (
		<Container>
			<Button>Button Inside a Container</Button>
		</Container>
	)
}
```

Here, the <code>Button</code> has a top margin only when it is a child of the <code>Container</code> component.

## Using style objects

Lastly, styled-components can also accept a style object instead of a template literal. This can be useful when working with dynamic styles.

```javascript
const Button = styled.button((props) => ({
	background: props.primary ? 'palevioletred' : 'turquoise',
	color: 'white',
}))

// Usage
function App() {
	return (
		<>
			<Button primary>Primary Button</Button>
			<Button>Secondary Button</Button>
		</>
	)
}
```

This covers the essential aspects of using styled-components in React. It's a versatile library that offers many ways to style your [React components](/react/components), keeping your styles scoped, maintainable, and in line with modern best practices.

## How styled-components works

Under the hood, styled-components utilizes tagged template literals – a feature of ES6 – to create your styles and attach them to your component. When you create a styled component, it creates a unique class name for your styles, and injects them into the document head inside a style tag.

Tagged template literals allow you to parse template literals with a function. Here, the function `styled.button` is tagged to the template literal, allowing it to preprocess the styles.

```javascript
const Button = styled.button`
	background: turquoise;
	color: white;
`
```

Whenever the styled component is rendered, it passes the given props to the tagged template literal. This is how conditional styling based on props is achieved.

```javascript
const Button = styled.button`
	background: ${(props) => (props.primary ? 'palevioletred' : 'turquoise')};
`
```

Styled-components also utilizes JavaScript's native context API under the hood to pass the theme object through the component tree, which can be accessed via `props.theme` in any styled component.

```javascript
const Button = styled.button`
	background: ${(props) => props.theme.primary};
`
```

This approach keeps your component logic and styles in one place, ensuring your codebase is tidy and maintainable.

## Frequently Asked Questions (FAQ)

### How do I use global styles with styled-components?

Styled-components offers a `createGlobalStyle` helper for defining global styles. These styles are applied to the entire document.

```javascript
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

// Usage
function App() {
	return (
		<>
			<GlobalStyle />
			// Your other components
		</>
	)
}
```

### Can I nest styles?

Yes, you can nest your CSS selectors similar to Sass. Just keep in mind to keep your components small and avoid unnecessary nesting.

```javascript
const Card = styled.div`
	padding: 1em;
	background: white;

	h1 {
		font-size: 2em;
	}
`
```

### Can I use media queries?

Yes, you can use media queries directly in your styled components.

```javascript
const Box = styled.div`
	width: 100%;

	@media (min-width: 700px) {
		width: 50%;
	}
`
```

With this powerful CSS-in-JS library, developers can write more predictable CSS for their React applications, making the codebase easier to maintain and understand.

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
` 

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use global styles with styled components?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Styled-components offers a createGlobalStyle helper for defining global styles. These styles are applied to the entire document. Import it from 'styled-components' and then use it in your App component."
      }
    },
    {
      "@type": "Question",
      "name": "Can I nest styles in styled components?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can nest your CSS selectors similar to Sass. Just keep in mind to keep your components small and avoid unnecessary nesting."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use media queries in styled components?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can use media queries directly in your styled components."
      }
    }
  ]
}

`}}></script>