---
title: Sinuous Cheat Sheet
sidebar_position: 1
slug: /category/sinuous
---

# Sinuous Cheat Sheet


## State 

**State Management:**

* **Observables:** Used to store and manage application state. Imported from `sinuous/observable`.
* **API:** Powerful yet lightweight.
* **Reactivity:** Changes in observables automatically update the UI.

**Concept:**

1. Observable stores data (`name = o('World')`).
2. Subscribe to listen for changes (`subscribe(() => ...)`).
3. Callback updates the UI based on the observable's value.
4. Set new values to the observable to trigger updates (`name('Dude')`).

**Example:**

```javascript
import { o, html } from 'sinuous';

const name = o('World');
document.body.append(
  html`
    <h1>Hello, ${name}!</h1>
  `
);
```

**Real-World:**

* Sinuous handles subscriptions internally, simplifying development.
* No need for manual VDOM diffing.

**Benefits:**

* Simple and efficient state management.
* Automatic UI updates on state changes.
* Lightweight and performant.


## Rendering 

**Rendering:**

* Uses `hyperscript`-like function calls: `h(tag, props, children)`
* Simplified tagged templates with `htm`
* Compile-time transformation preferred for production (`sinuous/babel-plugin-htm`)

**Example:**

```javascript
import { html } from 'sinuous';

const element = html`
  <h1>Hello world!</h1>
`;

// Translated to:
const element = h('h1', 'Hello world!');
```

**Observables:**

* Key to reactivity, represent state and content.
* Single template expression for simple state:

```javascript
const property = o('box');
const content = o('This is some text.');

const p = html`
  <p class=${property}>
    ${content}
  </p>
`;
```

* Function calls needed to retrieve observable values in complex expressions:

```javascript
const length = o(0);

const div = html`
  <div>${length} squared: ${() => Math.pow(length(), 2)}</div>
`;
```

**Properties:**

* Sets `properties` on DOM elements, not HTML attributes.
* Camel-cased attributes (e.g., `colSpan`).
* Special cases for some attributes (e.g., `htmlFor`).

**Events:**

* Functions starting with `on` become event listeners:

```javascript
html`
  <a href="#" onclick=${() => alert('you are 1,000,000th visitor!')}>
    Click here to win a prize
  </a>
`;
```

**Styles:**

* Accepts object or string:

```javascript
html`
  <h1 style={{ 'font-family': 'Comic Sans', color: 'springgreen' }}>
    Happy Birthday!
  </h1>
`;
```

**Further Exploration:**

* `sinuous/htm` documentation for advanced uses.

Remember, compile-time transformation is recommended for production!


## Components

**Basics:**

* Split UI into reusable, isolated code pieces.
* Define as plain JS functions.
* Use `<${Component} />` in views.
* Return a regular HTML element (no render function needed).
* Pass props via attributes.

**Example:**

```javascript
import { o, html } from 'sinuous';

const Timer = (props) => {
  const seconds = o(0);
  return html`
    <div>${props.unit}: ${seconds}</div>
  `;
};

document.body.append(
  html`
    <${Timer} unit="Seconds" />
  `
);
```

**Composing Components:**

* Create components for any level of detail.
* Reuse and nest components endlessly.

**Example:**

```javascript
function Welcome(props) {
  return html`
    <h1>Hello ${props.name}</h1>
  `;
}

function App() {
  return html`
    <div>
      <${Welcome} name="Sara" />
      <${Welcome} name="Cahal" />
      <${Welcome} name="Edite" />
    </div>
  `;
}

document.body.append(
  html`
    <${App} />
  `
);
```

**Advanced Example:**

```javascript
function Comment(props) {
  return html`
    <div class="comment">
      <${UserInfo} user=${props.author} />
      <div class="comment-text">
        ${props.text}
      </div>
      <div class="comment-date">
        ${formatDate(props.date)}
      </div>
    </div>
  `;
}

function UserInfo(props) {
  return html`
    <div class="userInfo">
      <${Avatar} user=${props.user} />
      <div class="userInfo-name">
        ${props.user.name}
      </div>
    </div>
  `;
}

function Avatar(props) {
  return html`
    <img class="avatar" src=${props.user.avatarUrl} alt=${props.user.name} />
  `;
}
```

**Remember:**

* Components promote code reusability and organization.
* Think logically about UI breakdown into components.
* Explore Sinuous documentation for advanced features and techniques.


## Lists

**Rendering Lists:**

* Two approaches: with and without the `map` module.

**Without `map`:**

* Re-renders entire list on changes.
* Useful for small lists or static lists with dynamic content.

**Example:**

```javascript
import { o, html } from 'sinuous';

const list = [/* ... */];
const view = () => html`
  <ul>
    ${list.map(item => html`<li>${item}</li>`)}
  </ul>
`;
```

**With `map`:**

* Efficiently handles list changes (adds, removes, updates).
* Minimizes DOM manipulations through diffs.
* Recommended for dynamic lists.

**Example:**

```javascript
import { o, html } from 'sinuous';
import { map } from 'sinuous/map';

const list = o(/* ... */);
const view = () => html`
  <ul>
    ${map(list, item => html`<li>${item.text}</li>`)}
  </ul>
`;
```

**Key Points:**

* `map` is optimized for smooth, performant list rendering.
* Use `map` for dynamic lists to avoid unnecessary DOM updates.
* Monitor DOM inspector to observe optimizations by the diff engine.

**Further Exploration:**

* `sinuous/map` documentation for advanced usage.
* Codesandbox examples for hands-on practice.

Remember, `map` is your ally for efficient and snappy list handling in Sinuous!

----

## Hydration 

**Hydrate: Adding Interactivity to Static HTML**

* Quickly add event listeners and dynamic content to existing HTML.
* Perfect for static site generators (e.g., Eleventy).
* More declarative and reactive than jQuery.

**Example:**

```javascript
import { observable } from 'sinuous';
import { hydrate, dhtml } from 'sinuous/hydrate';

const isActive = observable('');

hydrate(
  dhtml`<a class="navbar-burger burger${isActive}"
    onclick=${() => isActive(isActive() ? '' : ' is-active')} />`
);

hydrate(dhtml`<a class="navbar-menu${isActive}" />`);
```

**Key Points:**

* Creates virtual tree for dynamic parts.
* Infers root element from `id` or `class` attributes.
* Minimizes duplication of static content.

**API:**

* `hydrate(tree, [root])`: hydrates root node with dynamic HTML.
* `dhtml`` or `d()`: creates virtual HTML tree structure.
* `dsvg`` or `ds()`: creates virtual SVG tree structure.
* `_`: placeholder for skipped static content.

**Usage:**

* Define dynamic attributes only.
* Use `hydrate` to add event listeners and reactive content.

**Benefits:**

* Improved performance compared to full client-side rendering.
* Declarative and reactive approach.
* Less JavaScript code needed.

Remember, `hydrate` is a powerful tool for adding interactivity to static HTML in Sinuous!
