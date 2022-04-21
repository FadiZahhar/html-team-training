import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext2 } from '../contexts/BookContext2';

const BookList2 = () => {
  const { books } = useContext(BookContext2);
  return books.length ? (
    <div>
      <ul>
        {books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div >No books to read. Hello free time :).</div>
  );
}

export default BookList2;