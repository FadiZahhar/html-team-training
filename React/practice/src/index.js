import React from 'react';
import ReactDom from 'react-dom';

// import components
import Book from './Book';

// CSS
import './index.css'

// import data from books
import { books } from "./books"

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



ReactDom.render(<BookList />, document.getElementById('root'))