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
    img: `https://m.media-amazon.com/images/I/517YcbrSmvS.jpg`
  }
]


function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        {/* const { title, author, img, id } = book
         return (
          <Book key={id}
            title={title}
            author={author}
            img={img} />)
      })} */}
        /////////////////////////////////////////////
        // or 
        {/* return (
          <Book key={book.id}
            book={book} />)
      ***************************
      // in this case we shoud change the book fubction as below:
      /// we use book.img and so on since now the props is an entry object not destructed yet
      ***************************
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
      })} */}
        ////////////////////////////////////////////
        // or
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

  return (
    <article className='book'>
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
      {props.children}
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