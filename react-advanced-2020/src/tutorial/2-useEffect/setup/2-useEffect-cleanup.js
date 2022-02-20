import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setsize] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setsize(window.innerWidth)
    })
    //the following retun fireup onses we rerender
    return () => {
      window.removeEventListener('resize', () => {
        setsize(window.innerWidth)
      })
    }
  }, [])
  return (
    <>
      <h1>Size:</h1>
      <h2>{size}</h2>
    </>
  )
}

export default UseEffectCleanup
