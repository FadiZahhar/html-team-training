# Introduction to JS part 4

## key topics

1- Event listeners

     The addEventListener() method attaches an event handler to the specified element.

     The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

      Accepts 3 paremeters :
      The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

      The second parameter is the function we want to call when the event occurs.

     The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

`document.getElementById("myBtn").addEventListener("click", displayDate);`

2- Event object

     All event objects in the DOM are based on the Event Object.

     Therefore, all other event objects (like MouseEvent and KeyboardEvent) has access to the Event Object's properties and methods.

3 - This keyword

     In JavaScript, the this keyword refers to an object.

     Which object depends on how this is being invoked (used or called).

4- Local storage - session storage

     - The localStorage object stores data with no expiration date.
     The localStorage object allows you to save key/value pairs in the browser.

     - The sessionStorage object let you store key/value pairs in the browser.
     The sessionStorage object stores data for only one session.
     (The data is deleted when the browser is closed).
