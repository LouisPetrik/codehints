---
title: Position attribute in CSS 
--- 

# Position in CSS

The `position` property in CSS is a fundamental aspect of website layout design. It defines how an element is positioned in a layout, allowing the developer to control where and how elements will be displayed on the screen. Five key types of positioning exist: `static`, `relative`, `fixed`, `absolute`, and `sticky`. Each type of positioning offers distinct behaviors that are essential for creating responsive and attractive web designs. Let's examine each in detail.

## Static

By default, elements in HTML are positioned `static`, which means they follow the normal flow of the document. Elements are positioned one after another, as they appear in the code.

```css
div {
  position: static;
}
```

In the code snippet above, a `<div>` element will be positioned according to the normal flow of the document. With `static` positioning, properties like `top`, `bottom`, `left`, and `right` have no effect. This basic type of positioning is the foundation upon which more complex layouts are built.

## Relative

An element with `position: relative;` is positioned relative to its normal position. You can then use the `top`, `right`, `bottom`, and `left` properties to offset the element from its normal position.

```css
div {
  position: relative;
  top: 20px;
  left: 20px;
}
```

In the example above, the `<div>` element will be moved 20px down and 20px to the right from its normal position. The space it originally occupied will still be preserved. `relative` positioning is useful when you want to nudge an element from its normal position without disrupting the overall layout flow. You'll find it handy when crafting complex designs, such as aligning text over an image.

## Fixed

A `fixed` positioned element is positioned relative to the browser window. It will not move even if the page is scrolled.

```css
div {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

The code snippet above positions a `<div>` element at the bottom right of the viewport. Even if you scroll down the page, the element stays in place. This positioning type is typically used for elements like headers, footers, or navigation menus, which you want to remain visible at all times.

## Absolute

An element with `position: absolute;` is positioned relative to the nearest positioned ancestor (not static), or the initial containing block if no positioned ancestors are found.

```css
div.relative {
  position: relative;
}

div.absolute {
  position: absolute;
  top: 0;
  right: 0;
}
```

In the example above, the `.absolute` `<div>` will position itself at the top-right corner of the `.relative` `<div>`. If no positioned ancestor exists, the element positions itself relative to the `<html>` element. `absolute` positioning removes the element from the normal document flow, making it ideal for creating overlays or complex nested layouts.

## Sticky

A `sticky` positioned element is a hybrid of relative and fixed positioning. It behaves like `relative` positioning until a certain scroll position is met, then it acts like `fixed` positioning.

```css
div {
  position: sticky;
  top: 0;
}
```

In this example, the `<div>` element will behave normally until the user scrolls past it. Once that happens, it will 'stick' to the top of the viewport and remain visible as the user continues to scroll. This type of positioning is useful for creating sticky headers or showing important information consistently as the user scrolls.

Knowing how to effectively use CSS `position` property is a powerful tool for a web

 developer. Each positioning type serves a unique purpose in your layout design. As you continue your learning journey in CSS, be sure to explore our guides on [CSS selectors](/css/selectors) and the [CSS box model](/css/box-model) for a deeper understanding of these critical layout concepts.