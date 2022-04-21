import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext2 = createContext();

const BookContextProvider2 = (props) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'the final empire', author: 'brandon sanderson', id: 2},
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext2.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext2.Provider>
  );
}
 
export default BookContextProvider2;