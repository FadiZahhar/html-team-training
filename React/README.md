# React Js crash documentation

## <mark>- JSX rules</mark>

### 1. `Return single element`

```javascript
function Greating() {
  return <div> ... </div>
}
```

### 2. `div/ section / article or Fragment`

```javascript
<div>...</div>

<section>...</section>

<article>...</article>

<React.Fragment>...</React.Fragment>
```

### 3. `Use camelCase for html attribute`

```
className instead of class

onClick instead of onclick

etc ...
```

### 4. `Close every element`

```javascript
<img src="" alt="" />

<div>...</div>

<button></button>
```

### 5. `Formatting`

```javascript
function Greating() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
    </React.Fragment>
  )
}
```

## <mark>- Nested Component, React tools</mark>

```javascript
import React from "react"
import ReactDom from "react-dom"

function BookList() {
  return (
    <React.Fragment>
      <Book />
      <Book />
      <Book />
      <Book />
    </React.Fragment>
  )
}

function Book() {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  )
}

const Image = () => (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmIZsBWiKrffTcn49P_KYZlo1sjMCb-DX6g&usqp=CAU"
    alt="Lose belly fat"
  />
)

const Title = () => {
  return <h3>How to lose your belly fat</h3>
}

const Author = () => {
  return <p>Ali Eh Helbawi</p>
}

ReactDom.render(<BookList />, document.getElementById("root"))
```

## <mark>- CSS </mark>

### 1- index.css

```javascript
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f1f5f8;
  color: #222;
}

.bookList {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .bookList {
    grid-template-columns: repeat(3, 1fr);
  }
}

.book {
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
}

.book h3 {
  margin-top: 0.5rem;
}

.book p {
  color: #617d98;
  font-size: 1rem;
  margin-top: 0.25rem;
}


```

### 2- index.js

```javascript
import React from "react"
import ReactDom from "react-dom"

// CSS
import "./index.css"

// setup variables
const title = "How to lose your belly fat"
const author = "Ali Eh Helbawi"
const img = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmIZsBWiKrffTcn49P_KYZlo1sjMCb-DX6g&usqp=CAU`

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src={img} alt="Lose belly fat" />

const Title = () => {
  return <h3 style={{ color: "red", backgroundColor: "blue" }}>{title}</h3>
}

const Author = () => {
  return <p style={{ fontSize: "0.75rem", letterSpacing: "3px" }}>{author}</p>
}

ReactDom.render(<BookList />, document.getElementById("root"))
```

## <mark>- Props & children</mark>

```javascript
function BookList() {
  return (
    <section className="bookList">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        {/* children props mustbe in between the tags */}
        <a href="#">Pro-Solution.net</a>
      </Book>

      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  )
}

function Book(props) {
  // or function Book({ img, title, author, children }) {
  const { img, title, author } = props

  return (
    <article className="book">
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
      {props.children}
    </article>
  )
}
```

## <mark>- List, Key Prop And Spread Operator</mark>

```javascript

const books = [

  {
    id: 1,
    title: "How to lose your belly fat",
    author: "Ali Eh Helbawi",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmIZsBWiKrffTcn49P_KYZlo1sjMCb-DX6g&usqp=CAU`
  }
  ,
  {
    id: 2,
    title: "How to lose your mind",
    author: "Ali Eh Helbawi",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVQxOgm30Tf1KMvdyGzhr6MkCPImdrJAfnA&usqp=CAU`
  }
  ,
  {
    id: 3,
    title: "How to lose your money",
    author: "Ali Eh Helbawi",
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7rjjvMPoPWHbcc_6C5AFTk5Ly28SDo_fuw&usqp=CAU`
  }
]


function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
         const { title, author, img, id } = book
         return (
          <Book key={id}
            title={title}
            author={author}
            img={img} />)
      })}

    </section>
  )
}

// or
function BookList() {

         return (
          <Book key={book.id}
            book={book} />

      // in this case we shoud change the book fubction as below:
      /// we use book.img and so on since now the props is an entry object not destructed yet

      function Book(props) {
      const { img, title, author } = props
      return (
      <article className='book'>
      <Image img={book.img} />
      <Title title={book.title} />
      <Author author={book.author} />
      </article>
  )
}
      }

////or

function BookList() {

        return (
          <Book key={book.id}
            {...book} />)
  )
}


function Book(props) {
  // or function Book({ img, title, author, children }) {
  const { img, title, author } = props

  return (
    <article className='book'>
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
      {props.children}
    </article>
  )
}

```

## <mark>- Event Basics</mark>

```javascript
function Book(props) {
  const { img, title, author } = props

  // attribute, eventHandler
  // we can write the function or we can pass it as a referrence
  const onClickHandler = (e) => {
    console.log(e.target)
  }
  const complexExample = (author) => {
    console.log(author)
  }

  const mouseOver = (title) => {
    console.log(title)
  }

  return (
    <article
      className="book"
      onMouseOver={() => {
        mouseOver(title)
      }}
    >
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />

      <button
        type="button"
        onClick={() => {
          console.log(title)
        }}
      >
        simple example
      </button>

      <button
        type="button"
        onClick={(e) => {
          onClickHandler(e)
        }}
      >
        reference example
      </button>

      <button
        type="button"
        onClick={() => {
          complexExample(author)
        }}
      >
        complex example
      </button>
    </article>
  )
}
```

## <mark>- UseState</mark>

### 1. `Definition`

```javascript
The React useState Hook allows us to track state in a function component
State generally refers to data or properites that need to be tracking in an application.

Import useState
To use the useState Hook, we first need to import it into our component.

import { useState } from "react";
Notice that we are destructuring useState from react as it is a named export.
```

### 2. `Initialize useState`

```javascript
We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}

The first value, color, is our current state.

The second value, setColor, is the function that is used to update our state.
```

### 3. `Update State`

```javascript
To update our state, we use our state updater function.
We should never directly update state. Ex: color = "red" is not allowed.

Example:
Use a button to update the state:

import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}
```

### 4. `What Can State Hold`

```javascript
What Can State Hold
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.

Example:
Create multiple state Hooks:

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

Or, we can just use one state and include an object instead!

Example:
Create a single Hook that holds an object:

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}
```

### 5. `Object property`

```javascript
Since we are now tracking a single object, we need to reference that object and then the property of that object when rendering the component. (Ex: car.brand)

Updating Objects and Arrays in State
When state is updated, the entire state gets overwritten.

What if we only want to update the color of our car?

If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.

Example:
Use the JavaScript spread operator to update only the color of the car:

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.

We then return an object, spreading the previousState and overwriting only the color.

```

### 6. `Counter example with setTimeout`

```javascript
const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const resetValue = () => {
    setValue(0)
  }
  const complexIncrease = () => {
    setTimeout(
      () =>
        setValue((prevValue) => {
          return prevValue + 1
        }),
      2000
    )
  }

  const complexDecrease = () => {
    setTimeout(
      () =>
        setValue((prevValue) => {
          return prevValue - 1
        }),
      2000
    )
  }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase
        </button>
        <button className="btn" onClick={resetValue}>
          Reset
        </button>
        <button className="btn" onClick={complexDecrease}>
          Decrease
        </button>
      </section>
    </>
  )
}
```

## <mark>- UseEffect</mark>

### 1. `Definition`

```javascript

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

Let's use a timer as an example.

Example:
Use setTimeout() to count 1 second after initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
```

### 2. `useEffect run `

```javascript
But wait!! I keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:
useEffect(() => {
  //Runs on every render
});
2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);
3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
So, to fix this issue, let s only run this effect on the initial render.

Example:
Only run the effect on the initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

```

```javascript
Example:
Here is an example of a useEffect Hook that is dependent on a variable. If the users variable updates, the effect will run again:

import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([])

  const fetchUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users)
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return <>

    <h3>Github Users</h3>

    <ul className='users'>

      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user
        return (
          <li key={user.id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        )
      })}

    </ul>
  </>;
};
```

```javascript
If there are multiple dependencies, they should be included in the useEffect dependency array.
```

### 3. `Effect Cleanup`

```javascript
Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

Example:
Clean up the timer at the end of the useEffect Hook:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}
```

## <mark>- Multiple Returns - Fetching Data </mark>

```javascript
import React, { useState, useEffect } from "react"
import Axios from "axios"

const url = "https://api.github.com/users/QuincyLarson"

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("default users")

  const fetchUser = async () => {
    try {
      let res = await Axios({
        method: "get",
        url: url,
      })
      let data = await res.data
      setIsLoading(false)
      setUser(data)
    } catch (error) {
      console.log(error.response)
      // this is the main part. Use the response property from the error object
      setIsLoading(false)
      setIsError(true)
      return error.response
    }
  }

  useEffect(() => {
    fetchUser()
  }, [isLoading, isError, user])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>;
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>;
      </div>
    )
  }

  return (
    <div>
      <h1>{user.login}</h1>;
    </div>
  )
}

export default MultipleReturns
```

## <mark>- short-circuit evaluation</mark>

```javascript
 const [text, setText] = useState('')
  const firstValue = text || 'hello world';
  // || used to return default value if first value is falsy (null or false or undefined)
  const secondValue = text && 'hello world';
  // && used to return value if first value is truthy not (null or false or undefined)
  // if its falsy it return empty

  const [isError, setisError] = useState(false)

  return <>
    {text && <h1>{firstValue}</h1>}
    {/* since text is empty so its falsy: so it will not appear */}
    {!text && <h1>FSW</h1>}
    {/* since text is empty so its truthy: so it will  appear */}
    <h1>{text || "ALI"}</h1>
    {/* since text is falsy so "Ali will appear" */}
    <h1>{!text || "ALI"}</h1>
    {/* since ! text is truthy so the text will appear */}
    <button className='btn' onClick={() => setisError(!isError)} >Toggle Error</button>
    {isError ? // if error is true first expression will be on if no the second will be on
      <p>There is a gig error ...</p>
      :
      <div><h1>No Eroor ...</h1></div>}

```

## <mark>- Show/Hide Component</mark>

```javascript
import React, { useState, useEffect } from "react"

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", checkSize)
    return () => {
      window.removeEventListener("resize", checkSize)
    }
  }, [])
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>size: {size} px</h2>
    </div>
  )
}

export default ShowHide
```

## <mark>- Form && Multiple Inputs && Add Item To The List</mark>

```javascript
import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople((people) => {
        return [...people, newPerson]
      })
      // or  setPeople([...people, newPerson])
      setPerson({ firstName: "", email: "", age: "" })
    }
  }

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
```

## <mark>- useRef Hook</mark>

```javascript
The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.
```

<div>
<h2><span style="color:red;border:3px solid white">Does Not Cause Re-renders<span></h2>
</div>

```javascript
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.

Example:
Use useRef to track application renders.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
const [inputValue, setInputValue] = useState("");
const count = useRef(0);

useEffect(() => {
count.current = count.current + 1;
});

return (
<>
<input
type="text"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
/>

<h1>Render Count: {count.current}</h1>
</>
);
}

ReactDOM.render(<App />, document.getElementById('root'));

```

```javascript
useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).

It s like doing this: const count = {current: 0}. We can access the count by using count.current.
```

```javascript
Accessing DOM Elements
In general, we want to let React handle all DOM manipulation.

But there are some instances where useRef can be used without causing issues.

In React, we can add a ref attribute to an element to access it directly in the DOM.

Example:
Use useRef to focus the input:

import { useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

```javascript
Tracking State Changes
The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.

Example:
Use useRef to keep track of previous state values:

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.
```

## <mark>- useReducer Hook</mark>

<div>
<h4>
<ul>
<li>
<span style="color:white;background:black">
The useReducer Hook is similar to the useState Hook.
</span>
</li>

<li>
<span style="color:white;background:black">
It allows for custom state logic.
</span>
</li>

<li>
<span style="color:white;background:black">
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
</span>
</li>

</ul>
</h4>
</div>

```javascript
The useReducer Hook accepts two arguments.

useReducer(<reducer>, <initialState>)

1- The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

2- The useReducer Hook returns the current stateand a dispatchmethod.

```

<div>
<h3>
<span style="color:red;background:black">
- Here is an example of useReducer:
</span>
</h3>
</div>

<div>
<h4>
<span style="color:green;background:black">
- index.js:
</span>
</h4>
</div>

```javascript
import React, { useState, useReducer } from "react"
import Modal from "./Modal"
import { data } from "../../../data"
// reducer function
import { reducer } from "./reducer"

const Index = () => {
  const defaultState = {
    people: [],
    isModelOpen: false,
    modelContent: "",
  }
  const [name, setName] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const person = { id: new Date().getTime().toString(), name: name }
      dispatch({ type: "ADD_ITEM", payload: person })
      setName("")
    } else {
      dispatch({ type: "NO_VALUE", payload: "Please enter value" })
    }
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  return (
    <>
      {state.isModelOpen && (
        <Modal modelContent={state.modelContent} closeModal={closeModal} />
      )}
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => handleRemove(id)}>
              Remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
```

<div>
<h4>
<span style="color:green;background:black">
- Modal.js:
</span>
</h4>
</div>

```javascript
import React, { useEffect } from "react"

const Modal = ({ modelContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <div className="modal">
      <p> {modelContent}</p>
    </div>
  )
}

export default Modal
```

<div>
<h4>
<span style="color:green;background:black">
- reducer.js:
</span>
</h4>
</div>

```javascript
export const reducer = (state, action) => {
  if (action.type == "ADD_ITEM") {
    const newPeople = [...state.people, action.payload]

    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modelContent: "item added",
    }
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModelOpen: false,
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )

    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modelContent: "item removed",
    }
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModelOpen: true,
      modelContent: action.payload,
    }
  }
}
```

## <mark>- Prop Drilling</mark>

<div style="background:black">
<h3>
<span style="color:red">
What is prop drilling?
</span>
</h3>

<h4>
<span style="color:green">
Prop drilling (also called "threading") refers to the process you have to go through to get data to parts of the React Component tree. 
</span>
</h4>
</div>

<div style="background:black">
<h3>
<span style="color:red">
Simple example of a stateful component:
</span>
</h3>
</div>

```javascript
import React, { useState } from "react"
import { data } from "../../../data"
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => id !== person.id)
    })
  }
  return (
    <section>
      <h3>Props Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        className="btn"
        onClick={() => {
          removePerson(id)
        }}
      >
        remove
      </button>
    </div>
  )
}

export default PropDrilling
```

## <mark>- Context API / useContext</mark>

<div style="background:black">
<h3>
<span style="color:green;text-decoration: underline;">
What is useContext :
</span>
</h3>
<h3>
<span style="color:white">
<ul>
<li>
React Context is a way to manage state globally.
</li>
<li>
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
</li>
<li>
The Problem
State should be held by the highest parent component in the stack that requires access to the state.
</li>
<li>
To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
</li>
<li>
To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
</li>
<li>
Even though components did not need the state, they had to pass the state along so that it could reach child component.
</li>
</ul>
</span>

</h3>
</div>

<div style="background:black">
<h3>
<span style="color:green;text-decoration: underline;">
The solution is to create context.
</span>
</h3>
<span style="color:white;display:block">
<ul style="display:block">
<li style="display:block">
Create Context
To create context, you must Import createContext and initialize it:
<h4 style="color:blue;display:block">

```javascript
import { useState, createContext } from "react"
import ReactDOM from "react-dom"
const UserContext = createContext()
```

</h4>
</li>

<li>
Next we ll use the Context Provider to wrap the tree of components that need the state Context.

Context Provider
Wrap child components in the Context Provider and supply the state value.

<h4 style="color:red;display:block">

```javascript
function Component1() {
  const [user, setUser] = useState("Jesse Hall")

  return (
    <UserContext.Provider value={user}>
      <Component2 user={user} />
    </UserContext.Provider>
  )
}
```

</h4>
Now, all components in this tree will have access to the user Context.
</li>

<li>
<span style="color:green">
Use the useContext Hook
</span>
In order to use the Context in a child component, we need to access it using the useContext Hook.
<ol>
<li>
First, include the useContext in the import statement:
</li>

<li>
Then you can access the user Context in all components:
</li>
</ol>

</li>
</ul>
</span>

</div>

<div>
<h3>
<span style="color:green;text-decoration: underline;">
Full Example:
</span>
</h3>
</div>

```javascript
import React, { useState, useContext } from "react"
import { data } from "../../../data"
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
// two component- provider, consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider
      value={{ removePerson: removePerson, people: people }}
    >
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const { people } = useContext(PersonContext)
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
```

## <mark>- Custom Hooks</mark>

<div style="background:black">
<h3>
<span style="color:red;text-decoration: underline;">
Definition:
</span>
<div style="color:green;">
Hooks are reusable functions.

When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

Custom Hooks start with "use". Example: useFetch.

</div>

</h3>
<h3>
</h3>
</div>

<div style="background:black">
<h3>
<span style="color:red;text-decoration: underline;">
Build a Hook
</span>
<div style="color:green;">
The fetch logic may be needed in other components as well, so we will extract that into a custom Hook.

In the following code, we are fetching data in our Home component and displaying it.

Example Explained
We have created a new file called useFetch.js containing a function called useFetch which contains all of the logic needed to fetch our data.

We removed the hard-coded URL and replaced it with a url variable that can be passed to the custom Hook.

Lastly, we are returning our data from our Hook.

In index.js, we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from.

Now we can reuse this custom Hook in any component to fetch data from any URL.

</div>
</h3>
</div>

<div>
<h3>
<span style="color:red;background:black;fontWeight:bold;text-indent: 50px;">
index.js
</span>
</h3>
</div>

```javascript
import React, { useState, useEffect } from "react"
import { useFetch } from "./2-useFetch"

const url = "https://course-api.com/javascript-store-products"

const Example = () => {
  const { loading, products } = useFetch(url)

  console.log(products)

  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  )
}

export default Example
```

<div >
<h3>
<span style="color:green;background:black;fontWeight:bold;text-indent: 50px;">
useFetch.js
</span>
</h3>
</div>

```javascript
import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])

  return { loading, products }
}
```
