# Introduction to CSS

## Description

CSS stands for Cascading Style Sheets.
Though HTML is enough to create a simple website, it falls a bit short in the design department. So we'll add color, fonts, and element positioning by adding CSS (Cascading Style Sheets) to our HTML files to make them visually dynamic. In this unit, we'll learn CSS frameworks that can expedite our development process.

## key topics:

### Types of CSS styling

There are three ways you can use to implement CSS into your HTML:

- Internal:
  The internal style is defined inside the **<style> element**, inside the **head section**.
  An internal style sheet may be used if one single HTML page has a unique style.

- External: With an external style sheet, you can change the look of an entire website by changing just one file!
- Inline styles:

An inline style may be used to apply a unique style for a single element.
To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

### Syntax

A CSS rule consists of a selector and a declaration block.
`h1 {color: blue; font-size: 12px; }`

### Properties and value

1- Color properties

Colors are specified using:

- predefined color names: blue, yellow, red...
- rgb(red, green, blue): rgb(255, 100, 50)
- HEX: #ff0000
- rgba(Red-green-blue-alpha): rgba(76, 175, 80, 0.1)

2- width and height
The CSS height and width properties are used to set the height and width of an element.

3- outline
An outline is a line drawn outside the element's border.
Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content.

### Typography

1- font-size:
property sets the size of the text.

- font-size: 40px;
  The value could be absolute or relative.

2- font-family:
property to specify the font of a text

- font-family: Arial, Helvetica, sans-serif;

3- font-weight:
Specifies the weight of a font.

- font-weight: bold;

4- font-style:
property is mostly used to specify italic text.

- font-style: italic;
- font-style: oblique;

5- text-align:
Used to set the horizontal alignment of a text.

- text-align: center;
- text-align: left;
- text-align: right;

6- text-indent:
used to specify the indentation of the first line of a text

7- text-decoration:
Used to set or remove decorations from text.

- text-decoration: overline;
- text-decoration: line-through;
- text-decoration: underline;

8- text-transfrom:
Used to specify uppercase and lowercase letters in a text.

- text-transform: uppercase;
- text-transform: lowercase;
- text-transform: capitalize;

9- letter-spacing:
Used to specify the space between the characters in a text.

10- line-height:
used to specify the space between lines.

11- word-spacing:
Used to specify the space between the words in a text.

12- Display:
Is the most important CSS property for controlling layout.

     - display: inline;
     - display: block;

### position:

Specifies the type of positioning method used for an element.

     - static
     - relative
     - fixed
     - absolute

### floats:

property specifies how an element should float.

     - right
     - left

### Units:

CSS has several different units for expressing a length.

1- Absolute units: - Pixels: 1px is one device pixel (dot) of the display.
2- Relative units:

- Percentage: Relative to the parent element.
- em: Relative to the font size of the element (2em means 2 times the size of the current font)
- rem: Relative to font-size of the root element
- vh: Relative to 1% of the height of the viewport
- vw: Relative to 1% of the width of the viewport

### CSS box model:

The CSS box model is essentially a box that wraps around every HTML element.

It consists of: margins, borders, padding, and the actual content.
1- padding: Clears an area around the content.
2- margin: Clears an area around the content.
3- border: A border that goes around the padding and content.
border: 15px solid green;
4- border-radius: Defines the radius of the element's corners
5- box-sizing: allows us to include the padding and border in an element's total width and height.

### Specificity:

Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

- The universal selector (\*) and inherited values have the lower specificity
- A class selector beats any number of element selectors
- ID selectors have a higher specificity than attribute selectors
- Equal specificity: the latest rule wins

### Class vs. id

- The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (#) character, followed by the id of the element.

`#para1 { text-align: center; color: red; }`

- The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period (.) character, followed by the class name.

`.center { text-align: center; color: red; }`

## Learning Objectives

- To develop an understanding of how CSS can enhance the design of a webpage
- Implement CSS styling using external stylesheets, inline style and embedded style tags
- Use element selectors to know what element we’ll be targeting to style
- Styling using various properties and their value
- Understand the CSS box model
- Applying styles using classes and IDs

## Helpful Links

[URL](https://www.youtube.com/watch?v=-8ORfgUa8ow)
