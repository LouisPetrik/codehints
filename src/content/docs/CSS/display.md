---
title: Display Attribute in CSS
--- 

# Display Attributes in CSS

Display attributes in CSS provide control over how an element should be presented on the page. In this guide, we will delve into several of these attributes, their definitions, and code examples.

## Inline
The <code>inline</code> display value in CSS renders an element on the same line with other elements and does not start a new line. It does not respect top or bottom margins or padding.

```css
.span-text {
  display: inline;
}
```

In the above example, the `.span-text` class will cause any elements with it applied to appear inline with other elements. This is ideal for elements like <code>&lt;span&gt;</code> and <code>&lt;a&gt;</code>, as they can smoothly blend into a block of text. For more advanced selection techniques, visit our guide on [CSS selectors](/css/selectors).

## Block
The <code>block</code> display value causes an element to start on a new line and fill up the available horizontal space.

```css
.div-block {
  display: block;
}
```

This creates a "block" of content that is separated from other elements. Elements with this display value, like <code>&lt;div&gt;</code> and <code>&lt;h1&gt;</code>, cause a line break before and after them. To learn more about how this affects the layout and the box model, check our guide on the [CSS Box Model](/css/box-model).

## Flex
The <code>flex</code> display value establishes a flex formatting context for its contents. This is a one-dimensional layout method, perfect for items requiring alignment in rows or columns.

```css
.flex-container {
  display: flex;
}
```

By setting display: flex on the .flex-container class, child elements become flex items. They can then be controlled and aligned easily along a single line.

## Grid
The <code>grid</code> value initiates a grid formatting context. It's a powerful two-dimensional system, handling both columns and rows.

```css
.grid-container {
  display: grid;
}
```

This `display: grid` declaration on the `.grid-container` class allows us to position elements in a two-dimensional grid layout. Grids are incredibly flexible, providing control over rows and columns simultaneously.

## Inline-block
The <code>inline-block</code> display value allows elements to sit inline with others but still respect padding and margins.

```css
.inline-block-element {
  display: inline-block;
}
```

With this property, the `.inline-block-element` class will allow elements to be placed inline, similar to <code>inline</code>, but also respect padding and margins, like <code>block</code>. This hybrid display value offers more precise control over layout and spacing.

## Inline-flex
The <code>inline-flex</code> display value places the flex container inline with other elements.

```css
.inline-flex-container {
  display: inline-flex;
}
```

In this case, the `.inline-flex-container` class allows a flex container to exist inline with other elements. It combines the behaviors of <code>flex</code> and <code>inline</code>.

## Inline-grid
The `<code>inline-grid</code> display value makes the grid container inline with other elements.

```css
.inline-grid-container {
  display: inline-grid;
}
```

The `.inline-grid-container` class applies an inline grid layout, effectively creating a blend of <code>grid</code> and <code>inline</code>.

## Inline-table
The <code>inline-table</code> value behaves like an inline element and a

 table.

```css
.inline-table-element {
  display: inline-table;
}
```

This property makes an element with the `.inline-table-element` class behave like a table while sitting inline with other elements.

## List-item
The <code>list-item</code> value makes an element behave like a list item.

```css
.list-item-element {
  display: list-item;
}
```

By applying `display: list-item` to the `.list-item-element` class, the elements become list items and typically display a bullet point.

## None
The <code>none</code> value ensures that an element will not be displayed.

```css
.hidden-element {
  display: none;
}
```

Using `display: none` on the `.hidden-element` class will effectively hide the elements from the page, making them completely invisible and non-interactable.

## Initial
The <code>initial</code> value sets the display property to its default value.

```css
.initial-element {
  display: initial;
}
```

The `.initial-element` class with `display: initial` will reset the display property to its default value, effectively undoing any prior `display` declarations for elements with this class.

## Inherit
The <code>inherit</code> value allows an element to inherit the display property from its parent element.

```css
.inherit-element {
  display: inherit;
}
```

With `display: inherit` on the `.inherit-element` class, elements will adopt the display value of their parent element. This can streamline code by reducing repetition and improving readability.

To dive deeper into how display properties can affect the positioning of your elements, you may wish to explore our guide on [CSS positioning](/css/position). Understanding how these CSS display properties work is key to mastering CSS and creating layouts that are dynamic, responsive, and intuitive.