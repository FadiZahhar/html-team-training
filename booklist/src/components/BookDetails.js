import React, { useContext } from 'react'
import { Appcontext } from '../Appcontext'
const BookDetails = ({ book }) => {
  const { removeBook } = useContext(Appcontext)
  return (
    <li onClick={() => removeBook(book.id)}>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <br />
    </li>
  )
}

export default BookDetails
