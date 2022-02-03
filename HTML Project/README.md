# Introduction to HTML and CSS

## Description

Welcome all, This project shows the first steps in the journey towards a career in full-stack web development. Every full-stack web developer must master **HTML** and **CSS**. Thats why in my project I’m covering the most basic topics in HTML to create a well structured webpage.

The first, and perhaps most important, file we created is index.html, which is the default entry point for any web application. All of our subsequent work will build on this initial starting point. The file suffix .html refers to **HTML**, or **Hypertext Markup Language**. HTML allows us to format webpages and text in a similar way to how a word processor formats documents and the text inside them

## key topics

1- HTML structure:

    * The <!DOCTYPE html> declaration defines that this document is an HTML5 document
    * The <html> element is the root element of an HTML page
    * The <head> element contains meta information about the HTML page
    * The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
    * The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

2- Semantic elements, tags:

    An HTML element is defined by a start tag, some content, and an end tag:

    <tagname>Content goes here...</tagname>
    The HTML element is everything from the start tag to the end tag:

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

    <div> and <span>

    Span and div are both generic HTML elements that group together related parts of a web page.
    However, a div element is used for **block-level** organization and styling of page elements, whereas a span element is used for **inline** organization and styling.

3- Attrubites:

    Attributes provide additional information about elements
    Attributes usually come in name/value pairs like: name="value"
    Each HTML element have a specific attribute.

4- Links:

    HTML links are hyperlinks
    You can click on a link and jump to another document
    The HTML <a> tag defines a hyperlink

5- Images:

    Images can improve the design and the appearance of a web page.
    The <img> tag has two required attributes:

      src - Specifies the path to the image
      alt - Specifies an alternate text for the image

6- Lists:

    HTML lists allow web developers to group a set of related items in lists.

    An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.

    An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.

7-Input forms:

    An HTML form is used to collect user input. The user input is most often sent to a server for processing.
    The HTML <form> element is used to create an HTML form for user input

-The `<input>` Element

| Type                      |               Description               |
| ------------------------- | :-------------------------------------: |
| `<input type="text">`     | Displays a single-line text input field |
| `<input type="radio">`    |         Displays a radio button         |
| `<input type="checkbox">` |           Displays a checkbox           |
| `<input type="submit">`   |        Displays a submit button         |
| `<input type="button">`   |       Displays a clickable button       |

-The `<label>` Element:

     The <label> tag defines a label for many form elements.
     The (for) attribute of the <label> tag should be equal to the (id) attribute of the <input> element to bind them together.

`<form>`
`<input type="text" id="html" name="fav_language" value="HTML">`
`<label for="html">HTML</label>`
`</form>`

## Learning Objectives

- Build a main HTML structure of every webpage
- Include and link images in our HTML pages and their special attributes.
- Create a link (external, internal or in the same page).
- Use elements with special stylings (sup and sub, storng and em).
- Unordered and ordered list, list items and nested list.
- Input Forms (labels, inputs, submission..)

## Helpful Links

[Youtube tutorial](https://www.youtube.com/watch?v=-8ORfgUa8ow)
[W3school learnings](https://www.w3schools.com/html/default.asp)
