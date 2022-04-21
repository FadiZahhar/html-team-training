import React, { useContext } from 'react';
import { BookContext2 } from '../contexts/BookContext2';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext2);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetails;