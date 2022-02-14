## Introduction to JAVASCRIPT part2

## key point

1 - Functions

- Callback functions, higher order functions, functions as first class objects/citizens.
- Functions are first class objects - stored in variable(expression), passed as an argument to another function, return from the function (closure)
- Higher order functions - accepts another function as an argument or returns another function as a result
- Callback function - passed to another function as an argument and excuted inside that function

2- Powerfull Array methods

- forEach
  does not return new array

- map
  does return new array
  does not change size of original array
  uses values from original array when making new one

- filter
  does return a new array
  can manipulate the size of new array
  returns based on condition

- find
  returns single object
  returns first match, if no match undefined
  great for getting unique value

- reduce
  iterates, callback function
  reduces to a single value - number, array, object
  1 paremeter ('acc') - total of all calculations
  2 paremeters ('curr') - current iteration/value

3- Date

By default, JavaScript will use the browser's time zone and display a date as a full text string:
Mon Feb 14 2022 11:12:35 GMT+0200 (EET)
Date objects are created with the new Date() constructor.
new Date() creates a new date object with the current date and time.

Note: JavaScript counts months from 0 to 11:

January = 0.

December = 11.

4- querySelector - querySelectorAll

- The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
  `var el = document.querySelector(".myclass");`

- The Document method querySelectorAll() returns a static NodeList representing a list of the document's elements that match the specified group of selectors.
  `const matches = document.querySelectorAll("p");`

5- ChildNodes

The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments.
Returns all childNodes including whitespace which is treated as a text node

It is important to keep in mind that childNodes includes all child nodes, including non-element nodes like text and comment. To get a collection containing only elements, use **Element.children** instead.
