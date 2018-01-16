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

DOM Traversal

* `each`
* `children`
* `parent`
* `find`

DOM Manipulation

* `html`
* `empty`
* `append`
* `remove`
* `attr`
* `addClass`
* `removeClass`

Event Listeners

* `on`
* `off`

Throughout the domani library, the global variable `$d` is used as a wrapper for all its methods. It is used to select or create `HTMLElement` objects and returns them as a `DOMNodeCollection`. Elements can be selected in one of several ways, the most common of which being through CSS Selectors. `$d("ul")`, for example, would return a `DOMNodeCollection` of all `ul` elements in the document. Users can also pass in an unwrapped `HTMLElement`, which will then be given access to the methods available through `domani`.

If a user wishes to create an `HTMLElement` themselves, they can simply pass in the HTML code as a string, which will then be parsed to create a complete, wrapped `HTMLElement`.

Finally, users can use `$d` to pass in functions to be invoked once the DOM is loaded.

## `$d.ajax`

Sends and HTTP Request which then returns a `Promise`. Users can pass an options hash as an argument to specify any of the following fields:
  * Method (default: 'GET'): type of request
  * url: URL for HTTP request
  * contentType (default: 'application/x-www-form-urlencoded; charset=UTF-8'): content type of HTTP request
  * data: any additional data necessary for request, in the form of an empty JavaScript object
  * success: callback function to be invoked if request is successful
  * error: callback function to be invoked if request is unsuccessful

## Dom Traversal

## `each`

Iterates through all of the elements in a `DOMNodeCollection` and applies a callback function to each element.

## `children`

Returns a `DOMNodeCollection` object containing the **direct** children of each `HTMLElement` in the original `DOMNodeCollection`.

## `parent`

Returns a `DOMNodeCollection` containing a unique list of the parents of the original `HTMLElement`s.

## `find`

Returns a `DOMNodeCollection` containing all of the children of the original elements that correspond to a given 'selector' argument.

## Dom Manipulation

## `html`

Given a string as input, `html` sets the `innerHTML` of each `HTMLElement` to that string; otherwise, the function returns the `innerHTML` of the first `HTMLElement` in the `DOMNodeCollection`.

## `empty`

Empties the `innerHTML` of each `DOMNodeCollection` element.

## `append`

Appends a string, an `HTMLElement`, or `DOMNodeCollection` to the `innerHTML` of each element of a `DOMNodeCollection`

## `remove`

Removes each `HTMLElement` from the DOM.

## `attr`

Accepts an initial argument of an attribute name, as well as an optional second argument. If only one argument is given, `attr` returns the value of the given attribute of the first element in the `DOMNodeCollection`. If two arguments are given, the function assigns the second argument as the value of the given attribute for **all** of the `DOMNodeCollection` elements.

## `addClass`

Adds a given class to all elements in a `DOMNodeCollection`.

## `removeClass`

Removes a given class from all elements in a `DOMNodeCollection`.

## Event Listeners

## `on`

Given an event name/type and a callback function, adds an event listener to each element of the `DOMNodeCollection` which will invoke the callback when called.

## `off`

Given an event name/type, removes all callback functions associated with this event from all elements of the `DOMNodeCollection`.
