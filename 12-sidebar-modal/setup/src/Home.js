import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'
import { useGlobalContext } from './context'
const Home = () => {
  // const data = useContext(AppContext)
  //instead of all of these imports we can use our custom hook
  const data = useGlobalContext()
  console.log(data)
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn'>show Model</button>
    </main>
  )
}

export default Home
