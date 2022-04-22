import React from 'react'
import AppcontextProvider from './Appcontext'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'
const App = () => {
  return (
    <div className='App'>
      <AppcontextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </AppcontextProvider>
    </div>
  )
}

export default App
