import { logRoles } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css'

// setup variables
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

        return (
          <Book key={book.id}
            {...book} />)
      })}

    </section>
  )
}

function Book(props) {

  // or function Book({ img, title, author, children }) {
  const { img, title, author } = props

  // attribute, eventHandler

  const onClickHandler = (e) => {
    console.log(e.target)
  }
  const complexExample = (author) => {
    console.log(author);
  }

  const mouseOver = (title) => {
    console.log(title);
  }


  return (
    <article className='book' onMouseOver={() => { mouseOver(title) }}>
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
      <button type='button' onClick={(e) => { onClickHandler(e) }}>reference example</button>
      <button type='button' onClick={() => { complexExample(author) }}>complex example</button>
      {/* {props.children} */}
    </article>
  )
}

const Image = (props) => {
  return (<img src={props.img} alt="Lose belly fat" />)
}

const Title = (props) => {
  return (<h3>{props.title}</h3>)
}

const Author = (props) => {
  return (<p>
    {props.author}
  </p>)
}

ReactDom.render(<BookList />, document.getElementById('root'))