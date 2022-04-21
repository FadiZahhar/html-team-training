import React from 'react'
import Setup from './tutorial/13-context&hooks/useState/UseState-SongList'
import BookContextProvider from './tutorial/13-context&hooks/useState/BookContext'
function App() {
  return (
    <div className='container'>
      <BookContextProvider>
        <Setup />
      </BookContextProvider>
    </div>
  )
}

export default App
