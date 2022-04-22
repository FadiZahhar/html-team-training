import React, { useContext } from 'react'
import { Appcontext } from '../Appcontext'
const BookDetails = ({ book }) => {
  const { dispatch } = useContext(Appcontext)
  return (
    <li onClick={() => dispatch({ type: 'REMOVEBOOK', id: book.id })}>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <br />
    </li>
  )
}

export default BookDetails
