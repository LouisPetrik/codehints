---
title: DOM Manipulation 
--- 

<head>
<title>DOM Manipulation with JavaScript </title>
</head>



The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content and visual presentation of an online document with scripts such as JavaScript. Here is a cheat sheet for JavaScript DOM manipulation covering key subtopics.

## What is the DOM?

The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript. It represents the document as nodes and objects, allowing programming languages to interact with the page.

```javascript
// Log the entire body element
console.log(document.body);
```

In this code snippet, `document.body` is a representation of the `<body>` tag as an object in the DOM. You can perform actions on this object to change the structure, style, or content of the `<body>` element.

## Accessing elements

### getElementBy... selectors

JavaScript provides several methods to access DOM elements using their id, class name, tag name, etc. These methods include `getElementById`, `getElementsByClassName`, `getElementsByTagName`, among others.

```javascript
// Access an element by its ID
var titleElement = document.getElementById('title');

// Access elements by their class name
var importantElements = document.getElementsByClassName('important');

// Access elements by their tag name
var paragraphElements = document.getElementsByTagName('p');
```

In the example above, we're using `getElementById` to access an element with the ID of 'title'. The `getElementsByClassName` and `getElementsByTagName` methods return a live HTMLCollection of elements with the specified class name and tag name, respectively.

### querySelector

The `querySelector` method allows you to find the first element that matches a specified CSS selector(s) in the document.

```javascript
// Select the first .important element
var importantElement = document.querySelector('.important');
```

This code selects the first element in the document that has a class of 'important'. 

### querySelectorAll

The `querySelectorAll` method works similarly to `querySelector`, but instead of returning the first match, it returns a NodeList containing all elements that match the specified CSS selector(s).

```javascript
// Select all .important elements
var allImportantElements = document.querySelectorAll('.important');
```

This snippet selects all elements in the document with the class 'important'. 

### Parents, childs and siblings

Every element in the DOM has a relationship with other elements. These relationships are categorized as parent, child, and sibling relationships.

```javascript
// Select the parent of an element
var parentElement = document.querySelector('.important').parentNode;

// Select the children of an element
var childElements = document.querySelector('.important').children;

// Select the next sibling of an element
var nextSiblingElement = document.querySelector('.important').nextElementSibling;

// Select the previous sibling of an element
var prevSiblingElement = document.querySelector('.important').previousElementSibling;
```

In this example, we're using properties like `parentNode`, `children`, `nextElementSibling`, and `previousElementSibling` to access related elements in the DOM.

## Modifying elements

### Element content

To change the content of a DOM element, you can use the `innerText` or `innerHTML` property.

```javascript
// Change the text of an element
document.getElementById('title').innerText = 'New Title';

// Change the HTML of an element
document.getElementById('title').innerHTML = '<em>New Title</em>';
```

In this example, `innerText` changes the text content of the element with the ID 'title', while `innerHTML` changes the HTML content, allowing for the inclusion of HTML tags.

### Element attributes

Attributes of a DOM element, such as 'class', 'id', 'href' and 'src' can be accessed and modified using the `getAttribute`, `setAttribute`, `removeAttribute`, and `hasAttribute` methods.

```javascript
var linkElement = document.querySelector('a');

// Get the href attribute of a link
var href = linkElement.getAttribute('href');

// Set a new href for the link
linkElement.setAttribute('href', 'https://www.new-url.com');

// Check if the link has a target attribute
var hasTarget = linkElement.hasAttribute('target');

// Remove the target attribute from the link
linkElement.removeAttribute('target');
```

In this snippet, we first access the `href` attribute of a link, then change it using `setAttribute`. We also check if the `target` attribute exists on the link and remove it.

### Element CSS classes

You can manipulate the CSS classes of a DOM element using the `classList` property, which provides methods like `add`, `remove`, `toggle`, and `contains`.

```javascript
var titleElement = document.querySelector('#title');

// Add a new class to the element
titleElement.classList.add('new-class');

// Remove a class from the element
titleElement.classList.remove('old-class');

// Toggle a class on the element
titleElement.classList.toggle('toggle-class');

// Check if the element has a specific class
var hasClass = titleElement.classList.contains('check-class');
```

Here, we add a new CSS class to an element, remove an existing class, toggle a class (if the class exists it is removed; if it does not exist, it is added), and check if an element has a specific class.

## Creating new elements

### createElement

You can create new elements in the DOM using the `createElement` method.

```javascript
// Create a new div element
var newElement = document.createElement('div');
```

This code creates a new `<div>` element. However, it's important to note that the new element is not yet added to the DOM tree.

### appendChild

The `appendChild` method is used to append a node as the last child of a node.

```javascript
// Create a new paragraph element
var newElement = document.createElement('p');
newElement.innerText = 'This is a new paragraph';

// Append the new element to the body
document.body.appendChild(newElement);
```

In this example, we create a new paragraph element, set its text, and append it to the `<body>` element.

### insertBefore

The `insertBefore` method inserts a node before a reference node as a child of a specified parent node.

```javascript
// Create a new paragraph element
var newElement = document.createElement('p');
newElement.innerText = 'This is a new paragraph';

// Get the first child of the body
var firstChild = document.body.firstChild;

// Insert the new element before the first child of the body
document.body.insertBefore(newElement, firstChild);
```

This snippet creates a new paragraph and adds it to the beginning of the `<body>` element.

### cloneNode

The `cloneNode` method clones a node, and returns the clone.

```javascript
// Clone an existing element
var titleElement = document.querySelector('#title');
var clonedElement = titleElement.cloneNode(true);

// Append the cloned element to the body
document.body.appendChild(clonedElement);
```

This code snippet clones the element with the ID 'title' and appends the clone to the end of the `<body>` element. The `cloneNode(true)` method clones all descendants of the node, while `cloneNode(false)` clones only the node itself.

## Event handling

Events are actions or occurrences that happen in the system you are programming. The system notifies you of such events via events. JavaScript allows you to define behaviors that should be performed when such events occur.

```javascript
// Select an element
var buttonElement = document.querySelector('button');

// Define an event handler function
var handleClick = function(event) {
  console.log('Button clicked!', event);
};

// Attach the event handler to the button
buttonElement.addEventListener('click', handleClick);
```

In this snippet, we're attaching an event handler to a button element. The `handleClick` function is executed every time a 'click' event is fired on the button.

## Styling DOM nodes

DOM nodes can be styled using JavaScript by manipulating their `style` property.

```javascript
// Select an element
var titleElement = document.querySelector('#title');

// Change the element's color
titleElement.style.color = 'red';

// Change the element's background color
titleElement.style.backgroundColor = 'black';
```

In this example, we're changing the text color and the background color of an element. Each CSS property is a sub-property of `style`.

## DOM traversal

DOM traversal involves navigating around the DOM tree using properties like `parentNode`, `firstChild`, `lastChild`, `nextSibling`, and `previousSibling`.

```javascript
// Select an element
var titleElement = document.querySelector('#title');

// Get the parent of the element
var parent = titleElement.parentNode;

// Get the first child of the element
var firstChild = titleElement.firstChild;

// Get the last child of the element
var lastChild = titleElement.lastChild;

// Get the next sibling of the element
var nextSibling = titleElement.nextSibling;

// Get the previous sibling of the element
var prevSibling = titleElement.previousSibling;
```

In this code snippet, we're navigating around the DOM tree using various DOM traversal properties. These properties provide a way to navigate through the child, parent, and sibling nodes.

## Performance considerations

Manipulating the DOM can be slow and can lead to performance issues if not done wisely. Therefore, it is advisable to minimize direct DOM manipulation, and batch changes where possible.

```javascript
// Create a document fragment
var fragment = document.createDocumentFragment();

// Create and append elements to the fragment
for (var i = 0; i < 1000; i++) {
  var newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;
  fragment.appendChild(newElement);
}

// Append the fragment to the body
document.body.appendChild(fragment);
```

In this example, we use a DocumentFragment to create and append 1000 new paragraph elements. Appending the DocumentFragment to the DOM triggers a single reflow, rather than 1000, improving performance.