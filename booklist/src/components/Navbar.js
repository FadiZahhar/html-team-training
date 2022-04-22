import React, { useContext } from 'react'
import { Appcontext } from '../Appcontext'
const Navbar = () => {
  const { books } = useContext(Appcontext)
  return (
    <div>
      <h1>Ninja reading list</h1>
      <p>we have {books.length}</p>
    </div>
  )
}

export default Navbar
