import React from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css'

// setup variables
const title = "How to lose your belly fat"
const author = "Ali Eh Helbawi"
const img = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmIZsBWiKrffTcn49P_KYZlo1sjMCb-DX6g&usqp=CAU`

function BookList() {
  return (
    <section className='bookList'>
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
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () =>
  <img src={img} alt="Lose belly fat" />

const Title = () => {
  return (<h3>{title}</h3>)
}

const Author = () => {
  return (<p>
    {author}
  </p>)
}

ReactDom.render(<BookList />, document.getElementById('root'))