---
slug: virtual-dom-outdated
title: Why Virtual DOMs Might be Outdated
authors: louis
tags: [react, javascript, web]
---

# Why Virtual DOMs Might be Outdated

## What is a Virtual DOM?

### Concept of Virtual DOM

Virtual DOM (V-DOM) is a concept in programming where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactJS. The process involves creating a copy of the DOM in memory, where the manipulation is faster, and then updating the real DOM to match the virtual one.

### Benefits of Virtual DOM

The primary advantage of the V-DOM is that it's fast. Changes happen quickly in the V-DOM and only necessary changes are transferred to the real DOM. This minimizes the performance cost of updating the DOM, which is a relatively slow operation compared to other JavaScript operations.

## How React, Vue and others use the V-DOM

### V-DOM in React

React uses the V-DOM as a way to boost the performance of its apps. When a component’s state changes in a React app, a new V-DOM representation of the component is created. React then compares this new representation with the previous one and makes the minimum necessary changes in the real DOM.

### V-DOM in Vue

Similarly, Vue also uses the V-DOM to improve the performance of its applications. Vue’s reactivity system tracks dependencies during a component’s render, allowing the system to know precisely which components actually need to re-render when state changes.

#### Other libraries using V-DOM

Several other JavaScript libraries also make use of V-DOM, including Preact and Inferno, both of which are considered lighter and faster alternatives to React, particularly for applications that need to be highly performant.

## Virtual DOMs lead to overhead

### The Downsides of V-DOM

Despite its benefits, the V-DOM approach has its downsides. One of the major disadvantages is the memory overhead, as it requires keeping two copies of the DOM. Additionally, the diffing and patching process, which determines the minimum changes to update the real DOM, can also be quite expensive.

#### Performance implications

Although the V-DOM performs better than directly manipulating the DOM in many cases, for some complex apps with large states, the performance benefits can diminish. The process of creating and comparing V-DOM trees can become a bottleneck, especially for apps that require real-time updates.

## Alternatives to the virtual DOM

### Server Components

Server components allow developers to build parts of the UI on the server, which can then be sent to the client.

This can be a more efficient approach because it only sends the components that need to be updated, reducing the size of updates and the cost of diffing and patching.

### Incremental Static Regeneration (ISR)

ISR is a strategy used by Next.js that allows developers to use static generation for a page, but update the page data incrementally after it's been built. This allows for extremely fast page loads while also enabling the page data to be updated on a regular basis.

#### Svelte and the absence of V-DOM

Svelte is an innovative framework that compiles your code to efficient imperative code that surgically updates the DOM. As a result, Svelte doesn't need a V-DOM, and there's no diffing or patching process. This makes Svelte potentially faster and more efficient than V-DOM-based frameworks.

## Summary

While the Virtual DOM has been a key feature of many popular JavaScript frameworks and libraries, it's not without its downsides. The memory overhead and potential performance bottlenecks can make it less suitable for some complex applications. Thankfully, there are several alternatives out there, from server components and incremental static regeneration to innovative frameworks like Svelte. The choice of whether to use a V-DOM or an alternative approach will depend on the specific needs of your application.

## FAQs

1. **What is a Virtual DOM?**
   A Virtual DOM is a programming concept where a "virtual" representation of the UI is kept in memory and synced with the real DOM by a library.

2. **How do React and Vue use the Virtual DOM?**
   React and Vue use the Virtual DOM to improve the performance of their apps. They create a new V-DOM representation whenever a component's state changes and then updates the real DOM with the minimum necessary changes.

3. **Why does the Virtual DOM lead to overhead?**
   The Virtual DOM approach leads to overhead because it requires keeping two copies of the DOM and involves an expensive diffing and patching process.

4. **What are some alternatives to the Virtual DOM?**
   Alternatives to the Virtual DOM include server components, incremental static regeneration, and frameworks like Svelte that don't require a V-DOM.

5. **Is the Virtual DOM outdated?**
   The Virtual DOM isn't necessarily outdated, but there are situations where other technologies may be more efficient or suitable. The choice will depend on the specific needs of your application.
