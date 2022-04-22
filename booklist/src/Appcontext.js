import React, { useState, createContext, useReducer, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import { reducer } from './reducer'
export const Appcontext = createContext()
const AppcontextProvider = ({ children }) => {
  // const [books, setBooks] = useState([
  //   { title: 'black swan', author: 'jack hiss', id: 1 },
  //   { title: 'white swan', author: 'mary jadk', id: 5 },
  //   { title: 'red swan', author: 'jiff lkad', id: 4 },
  // ])
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuidv4() }])
  // }

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id))
  // }
  const [books, dispatch] = useReducer(reducer, [], () => {
    const storage = localStorage.getItem('books')
    return storage ? JSON.parse(storage) : []
  })
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <Appcontext.Provider value={{ books, dispatch }}>
      {children}
    </Appcontext.Provider>
  )
}
export default AppcontextProvider
