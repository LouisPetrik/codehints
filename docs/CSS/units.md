---
title: CSS Units 
--- 

# CSS Units

CSS units are fundamental to any web design task. They allow designers and developers to specify the sizes of various elements on a webpage. They can be categorized into two broad types: absolute and relative units. Understanding the difference between these two is crucial for creating responsive designs that look good on any device. Here, we will delve into the specifics of CSS units and their application.

## How to Use Units

In CSS, units are often used to define dimensions like width, height, padding, margins, and more. To set these properties, you can simply include the value and the unit in your CSS declarations.

Consider the following example where we are setting the `width` property of a `div` element:

```css
div {
  width: 300px;
}
```

In the code snippet above, `px` denotes the unit of measurement for the width. The `width` property of the `div` element is set to `300px`. There are many other units available for use in CSS, and we'll learn about them in the following sections.

CSS units can be classified into two types - absolute and relative. Absolute units are fixed in size and do not change based on the parent element's size or the viewing device. On the other hand, relative units are dynamic and change based on other factors. Let's learn more about these two types.

Before that, remember that understanding how to correctly use CSS units is a vital part of mastering CSS. You can get a broader overview of CSS on our [introduction to CSS](/category/css) page.

## Absolute Units

Absolute units are fixed-size units that do not change with the size of the viewport or parent element. They are typically used for print media, but can also be used for screen media when the output size is known.

Here are some examples of absolute units:

```css
p {
  font-size: 12pt; /* points */
}

div {
  width: 3in; /* inches */
}

h1 {
  margin: 2cm; /* centimeters */
}
```

In the first example, the font size of the `p` element is set to `12pt`, which is points. In the second, the `div` width is set to `3in`, which stands for inches. The third sets the `h1` element's margin to `2cm`, which is centimeters.

However, due to their fixed nature, absolute units are less flexible for creating responsive designs compared to relative units. It's also important to remember that the physical size of these units can vary based on the screen's pixel density.

## Relative Units

Relative units, on the other hand, provide flexibility as they adjust relative to other elements or the viewport. They are ideal for creating responsive layouts that adapt to different screen sizes. For instance, the `em` unit is relative to the font-size of its nearest parent, while `vw` is relative to the width of the viewport.

Here are a few examples of relative units:

```css
div {
  font-size: 2em; /* size relative to parent */
}

p {
  width: 50%; /* percentage of parent's width */
}

section {
  margin: 5vw; /* viewport width */
}
```

In the first example, the font size of the `div` element is set to `2em`, which means it's twice the font size of its parent. In the second, the `p` width is set to `50%`, which will be half the width of its parent. The third sets the `section` margin to `5vw`, which is 5% of the viewport width.

In the context of the [CSS Box Model](/css/box-model), understanding relative units becomes even more important as it lets you control the layout precisely.

Relative units like `em`, `%`, `vh`, `vw`, `vmin`, `vmax` are a boon for creating responsive designs that adapt to the user's screen or parent element size. They play a key role in controlling the size of text and layout in [CSS selectors](/css/selectors) and can greatly improve the user experience across different devices.

In conclusion, while absolute units are excellent when you want to maintain fixed dimensions, relative units offer more flexibility for responsive design. Understanding how and when to use these CSS units is a significant step in becoming a proficient web developer.
