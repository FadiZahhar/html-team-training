# Introduction to React.js

## Froms

Just like in HTML, React uses forms to allow users to interact with the web page

You add a form with React like any other element

**Example**
Add a form that allows users to enter their name:

```javascript
function MyForm() {
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" />
      </label>
    </form>
  );
}
```

### Handling Forms

Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the onChange attribute.

We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

**Example**
Use the onChange Hook to manage the input:

```javascript
import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}
```

### Submitting Forms

You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

```javascript

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>

```
