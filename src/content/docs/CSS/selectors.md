---
title: Selectors
---

# CSS Selectors Cheat Sheet

CSS selectors are powerful tools in web development that allow developers to select and manipulate HTML elements. Each different type of CSS selector gives developers a different way to target and manipulate elements on a webpage.

## Simple Selectors

Simple selectors are the most basic form of CSS selectors. They include type selectors, class selectors, and id selectors.

| CSS Selector | Meaning |
|--------------|---------|
| `*` | Selects all elements |
| `element` | Selects all `element` |
| `.class` | Selects all elements with `class="class"` |
| `#id` | Selects the element with `id="id"` |
| `[attribute]` | Selects all elements with `attribute` |

## Combinator Selectors

Combinator selectors are used to select elements that have a specific relationship to another element.

| CSS Selector | Meaning |
|--------------|---------|
| `element element` | Selects all elements inside `element` |
| `element > element` | Selects all elements directly inside `element` |
| `element + element` | Selects the element directly after `element` |
| `element ~ element` | Selects all elements after `element` |

## Pseudo-class Selectors

Pseudo-class selectors are used to select elements based on their state.

| CSS Selector | Meaning |
|--------------|---------|
| `:active` | Selects the active link |
| `:hover` | Selects links on mouse hover |
| `:visited` | Selects all visited links |
| `:first-child` | Selects the first child of an element |
| `:last-child` | Selects the last child of an element |

## Attribute Selectors

Attribute selectors are used to select elements with a certain attribute or attribute value.

| CSS Selector | Meaning |
|--------------|---------|
| `[attribute=value]` | Selects elements with `attribute="value"` |
| `[attribute~=value]` | Selects elements with `attribute` containing `value` |
| `[attribute&#124;=value]` | Selects elements with `attribute` starting with `value` |
| `[attribute^=value]` | Selects elements with `attribute` beginning with `value` |
| `[attribute$=value]` | Selects elements with `attribute` ending with `value` |
| `[attribute*=value]` | Selects elements with `attribute` containing `value` |

This CSS selectors cheat sheet is a quick guide to CSS selectors for programmers. Whether you're a beginner or an experienced developer, this cheat sheet will make your web development journey easier and more efficient. It's important to note that there are more CSS selectors not covered here. This cheat sheet only covers the most commonly used CSS selectors in web development.

## Hierarchy 

Understanding the hierarchy of CSS selectors is critical to mastering CSS. This hierarchy, also known as specificity, determines which styles are applied when there is a conflict between different CSS rules that can apply to the same element. 

### CSS Specificity

Specificity determines which CSS rule is applied by the browsers. Each selector has its place in the hierarchy. If two selectors apply to the same element, the one with higher specificity wins.

| CSS Selector | Specificity | Meaning |
|--------------|-------------|---------|
| `<code>!important</code>` | Highest | Overrides other declarations |
| Inline styles | High | Styles added to the `style` attribute of an element |
| `<code>#id</code>` | Medium-high | Selects the element with `id="id"` |
| `<code>.class</code>`, `<code>:pseudo-class</code>`, `<code>[attribute]</code>` | Medium | Selects based on class, pseudo-class, or attribute |
| `<code>element</code>`, `<code>::pseudo-element</code>` | Low | Selects based on element type or pseudo-element |
| `<code>*</code>` | Lowest | Selects all elements |

### Selector Chaining and Nesting

Chaining and nesting selectors can increase specificity. Chaining combines multiple conditions for a single element, while nesting applies styles based on a hierarchical relationship.

| CSS Selector | Specificity | Meaning |
|--------------|-------------|---------|
| `<code>#id.class</code>` | Medium-high | Selects the element with `id="id"` and `class="class"` |
| `<code>element.class</code>` | Medium | Selects `<code>element</code>` with `class="class"` |
| `<code>element element</code>` | Low | Selects `<code>element</code>` inside another `<code>element</code>` |

Remember that when selectors have the same specificity, the last declared rule in the CSS will take precedence. This is known as the source order rule.