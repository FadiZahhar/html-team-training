import React from 'react'
import AppcontextProvider from './Appcontext'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='App'>
      <AppcontextProvider>
        <Navbar />
      </AppcontextProvider>
    </div>
  )
}

export default App
