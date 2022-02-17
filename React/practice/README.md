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

### 1. `The React useState Hook allows us to track state in a function component`

```javascript
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
