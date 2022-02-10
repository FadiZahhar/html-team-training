# Introduction to JS

## Description

Javascript is a scripting language used to create and control the dynamic website content.
What makes Javascript special is that by adding it to our project it makes beautiful but boring page dynamic, by allowing users to interact with it.

## key Topics

1- Variables

**let, var, const**

- let : allows you to declare variables that are limited to the scope of a block

- var : The var keyword can be used to declare a variable that is accessible throughout a program, and can be changed.

- const : Const is another keyword to declare a variable when you do not want to change the value of that variable for the whole program.

The variable name:

    - can contain digits, letters, underscore, $
    - must start with letter, $ or underscore
    - no Keyword
    - cannot start with number
    - case sensitive
    - camel case or underscore

2- Numbers and operators

    JavaScript has only one type of numbers.
    Numbers can be written with, or without decimals.
    Number values are typed in without quote marks.

- operators:

  - Addition(+): Adds two numbers together.
  - Subtraction(-): Subtracts the right number from the left.
  - Multiplication(\*): Multiplies two numbers together.
  - Division(/): Divides the left number by the right.
  - Remainder (%): Returns the remainder left over after you've divided the left number into a number of integer portions equal to the right number.

  - The increment operator (++) increments numbers.
  - The decrement operator (--) decrements numbers.

- Logical operators

| operator | Description                       |
| -------- | --------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |

3- Data types - 7 total

**primitive**

- string:
  `let lastName = "Johnson"`
- Number:
  `let length = 16;`
- boolean:

  let x = 5;
  let y = 5;
  let z = 6;
  (x == y) // Returns true
  (x == z) // Returns false

- Null:

`let num = 1 + null;`

- Undefined:
  `let x;`

**non-primitive**

- Arrays:
  `const cars = ["Saab", "Volvo", "BMW"];`
- Function:

  A JavaScript function is a block of code designed to perform a particular task.
  A JavaScript function is executed when "something" invokes it (calls it).

`function myFunction(p1, p2) {return p1 * p2;}`

- Object:

  `let x = {firstName:"John", lastName:"Doe"};`

4 - Null and undefined

Both represents no value

- Undefined - "javascript can not find value for this", the reason could be:

  - variable without value
  - missing function arguments
  - missing object properties

- Null - "Developer sets the value"

5- conditional statements:

In JavaScript we have the following conditional statements:

      - Use if to specify a block of code to be executed, if a specified condition is true
      - Use else to specify a block of code to be executed, if the same condition is false
      - Use switch to specify many alternative blocks of code to be executed

`if (time < 10) { greeting = "Good morning"; } else if (time < 20) { greeting = "Good day"; } else { greeting = "Good evening"; }`

- switch:

  The switch statement is used to perform different actions based on different conditions.
  Use the switch statement to select one of many code blocks to be executed.

  This is how it works:

      The switch expression is evaluated once.
      The value of the expression is compared with the values of each case.
      If there is a match, the associated block of code is executed.
      If there is no match, the default code block is executed.

6- Loops

Loops can execute a block of code a number of times.
The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
// code block to be executed
}

Statement 1 sets a variable before the loop starts (let i = 0).

Statement 2 defines the condition for the loop to run (i must be less than 5).

Statement 3 increases a value (i++) each time the code block in the loop has been executed.

`for (let i = 0; i < 5; i++) { text += "The number is " + i + "<br>"; }`

7 - string properties and methods

- length(), returns the length of a string.
- slice(), extracts a part of a string and returns the extracted part in a new string.
- concat(), joins two or more strings.
- toUpperCase(), converts a string to a upperCase.
- toLowerCase(), converts a string to a lowerCase.
- trim(), removes whitespace from both sides of a string.
- charAt(), returns the character at a specified index (position) in a string.
- indexOf(), returns the index of (the position of) the first occurrence of a specified text in a string.

8 - Array properties and methods

- length(), soecifies the length of the array.
- pop(), removes the last element from an array.
- push(), adds a new element to an array (at the end)
- shift(), removes the first array element and "shifts" all other elements to a lower index.
- unshift(), adds a new element to an array (at the beginning), and "unshifts" older elements.
- concat(), creates a new array by merging (concatenating) existing arrays.
- splice(), adds new items to an array.
- slice(), slices out a piece of an array.

9- Reference VS value

In JavaScript primitive types are passed around as values: meaning that each time a value is assigned, a copy of that value is created.
On the other side objects (including plain objects, array, functions, class instances) are references. If you modify the object, then all variables that reference that object are going to see the change

10 - global vs local variable

- **Global Variables** A global variable has a global scope which means it can be defined anywhere in your JavaScript code.

- **Local Variables** A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

Within the body of a function, a local variable takes precedence over a global variable with the same name. If you declare a local variable or function parameter with the same name as a global variable, you effectively hide the global variable
