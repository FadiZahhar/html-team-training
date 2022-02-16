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
    img: `https://m.media-amazon.com/images/I/517YcbrSmvS.jpg`
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
