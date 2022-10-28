---
title: Qwik - The Revolutionary Web Framework
sidebar_position: 1
slug: /category/qwik
---

# What is Qwik?

Qwik is a all-new front-end framework, with an new approach for creating and updating dynamic sites.
THe framework can indeed be compared to React, Vue, Svelte and others, but only regarding the possibilites.
Under the hood, Qwik uses a new idea of how to render and update HTML on the site.

Let me explain after a brief example.

## A Qwik example - Hello world

```tsx
import { component$ } from '@builder.io/qwik'

export const App = component$(() => {
	return <p>Hello world</p>
})
```

As you can see, the syntax of our Qwik app is similar to React app.
The obvious reason is, that Qwik also uses JSX/TSX as the syntax for writing components.
Yet, there are a couple differences, I cover in the following article: **[Qwik vs. JSX](/qwik/qwik-vs-jsx)**

## Getting started with Qwik

There is already a small CLI available, which can be used to create an Qwik app based on a couple templates.
Run <code>npm create qwik@latest</code> and click yourself through the questions. Finally, you have a working
project.

For viewing your Qwik app in development mode, run <code>npm run dev</code>. <br/>
For building the app to production, run <code>npm run build</code>.

## How does Qwik work under the hood?

So, what makes Qwik so special making it called "The first O(1) web framework"?

First of all, Qwik needs only about 1 kB of JS shipped to the browser to get up and running.
Compared to React, Vue, Angular and others, this is only a friction in size.

But how is this achieved?

Qwik is completely from the idea of hydration, which is used in most of the big frameworks and libraries.
Hydration is the process of merging together the HTML, sent down to the client, with the functionality it depends on. This is where
server side rendering came in handy back in the day, as it renders the HTML already and sends it with a bunch of required JavaScript.

Before server side rendering, the server was only sending a little HTML and a big bunch of JavaScript, for constructing the HTML structure
in the browser. As you might noticed, this is a really inefficient process.

Coming back to the more efficient server side rendering, there is still one problem: The amount of JS and time for executing it, in
order to make the page actually interactive. A common SSR-framework might do these two things on start up of the app in the browser:

1. Execute the JavaScript, responsible for event listeners. Then, link the event listeners to the corrosponding DOM elements.
2. Start up the internal representation of the DOM nodes, often known as virtual DOM.

As you might notice, this process leads to two issues:

1. The need to download a bunch of JS from the server
2. The need to execute this bunch of JS in the browser

### Qwiks Resumability

Instead of hydration, Qwik uses a concept called resumability.
One can imagine this concept as the ability to move around Qwik components anywhere in their lifecycle - no
matter if from the server to client or vice versa. It is all about pausing and continuing executing at the right time.

For example, Qwik lazy-loads functionality of components like this:

```html
<button on:click="./bundle.js#handler_symbol">Press me</button>
```
