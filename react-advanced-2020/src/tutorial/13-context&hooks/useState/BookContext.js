import React, { createContext, useState } from 'react'

export const BookContext = createContext()
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'hello' },
    { id: 2, title: 'radio' },
    { id: 3, title: 'hello again' },
  ])
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
