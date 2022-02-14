# Introduction to JAVASCRIPT part 3.

## key topics

1- Node-list

     A NodeList object is a list (collection) of nodes extracted from a document.
     All browsers return a NodeList object for the property childNodes.

     Most browsers return a NodeList object for the method querySelectorAll().

2- QuerySelector - querySelectorAll

      The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. var el = document.querySelector(".myclass");

     The Document method querySelectorAll() returns a static NodeList representing a list of the document's elements that match the specified group of selectors. const matches = document.querySelectorAll("p");

3- ChildNodes

     The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments. Returns all childNodes including whitespace which is treated as a text node

     It is important to keep in mind that childNodes includes all child nodes, including non-element nodes like text and comment. To get a collection containing only elements, use Element.children instead.

4- ParentElement

     The read-only parentElement property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element.

5- Next sibling

      Return the HTML content of the next sibling of a list item:

     `document.getElementById("item1").nextSibling.innerHTML;`

6- GetAttribute - setAttribute

     - The getAttribute() method returns the value of an element's attribute.

     Get the value of the class attribute of an element:

`let value = document.getElementById("myId").getAttribute("class");`

     - The setAttribute() Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

`Element.setAttribute(name, value);`

7- createElement - createTextNode - element.appendChild

     - The createElement() method creates an element node.

`const para = document.createElement("p");`

     - Create a text node and append it to the document:

`let textNode = document.createTextNode("Hello World");`
`document.body.appendChild(textNode);`

8 - removeChild

     The removeChild() method removes a specified child node of the specified element.

`var list = document.getElementById("myList");`
`list.removeChild(list.childNodes[0]);`
