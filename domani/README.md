# domani

domani is a Javascript DOM manipulation library inspired by JQuery. It allows users to select, traverse, and create DOM elements, as well as create `DOMNodeCollection` objects using HTML5. It also simplifies HTML requests and processes them with an asynchronous queue.

## Getting Started

To use domani, simply download the library into a preexisting project and include the webpack output `domani.js` in your source code.

```html
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="./css/reset.css">
  <script type="text/javascript" src="../domani.js"></script>
  ...
</head>
```

As an alternative, the user can also run `webpack` in the terminal to create the webpack file themselves.

## API

* `$d`
* `$d.ajax`
* `$d.extend`

DOM Traversal

* `each`
* `children`
* `parent`

DOM Manipulation

* `html`
* `empty`
* `append`
* `attr`
* `addClass`
* `removeClass`
* `find`
* `remove`

Event Listeners

* `on`
* `off`

## `$d`

Throughout the domani library, the global variable `$d` is used as a wrapper for all its methods. It is used to select or create `HTMLElement` objects and returns them as a `DOMNodeCollection`. Elements can be selected in one of several ways, the most common of which being through CSS Selectors. `$d("ul")`, for example, would return a `DOMNodeCollection` of all `ul` elements in the document. Users can also pass in an unwrapped `HTMLElement`, which will then be given access to the methods available through `domani`.

If a user wishes to create an `HTMLElement` themselves, they can simply pass in the HTML code as a string, which will then be parsed to create a complete, wrapped `HTMLElement`.

Finally, users can use `$d` to pass in functions to be invoked once the DOM is loaded.
