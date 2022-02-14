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
