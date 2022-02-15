import { logRoles } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css'

// setup variables
const firstBook = {
  title: "How to lose your belly fat",
  author: "Ali Eh Helbawi",
  img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmIZsBWiKrffTcn49P_KYZlo1sjMCb-DX6g&usqp=CAU`
}

const secondBook = {
  title: "How to lose your mind",
  author: "Ali Eh Helbawi",
  img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVQxOgm30Tf1KMvdyGzhr6MkCPImdrJAfnA&usqp=CAU`
}


function BookList() {
  return (
    <section className='bookList'>
      <Book title={firstBook.title} 
      author={firstBook.author} 
      img={firstBook.img} >
        {/* children props mustbe in between the tags */}
        <a href="#">Pro-Solution.net</a>
      </Book>
      <Book title={secondBook.title} 
      author={secondBook.author} 
      img={secondBook.img} />
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