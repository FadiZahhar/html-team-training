import React, { useContext } from 'react'
import { Appcontext } from '../Appcontext'
import BookDetails from './BookDetails'
const BookList = () => {
  const { books } = useContext(Appcontext)
  return books.length ? (
    <div>
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />
        })}
      </ul>
    </div>
  ) : (
    <div>No books found</div>
  )
}

export default BookList
