import React, { useContext, useState } from 'react'
import { Appcontext } from '../Appcontext'
function BookForm() {
  const { addBook } = useContext(Appcontext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='author name'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type='text'
        placeholder='title name'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type='submit' value='Addbook' />
    </form>
  )
}

export default BookForm
