import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
export const Appcontext = createContext()
const AppcontextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: 'black swan', author: 'jack hiss', id: 1 },
    { title: 'white swan', author: 'mary jadk', id: 5 },
    { title: 'red swan', author: 'jiff lkad', id: 4 },
  ])
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <Appcontext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </Appcontext.Provider>
  )
}
export default AppcontextProvider
