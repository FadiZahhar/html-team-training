import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0)
  useEffect(() => {
    console.log('useEffect')
    if (value > 0) {
      document.title = `New Messages (${value})`
    }
  })
  // second parameter
  useEffect(() => {
    console.log('runs on inial render only')
  }, [])

  // second parameter
  useEffect(() => {
    console.log('runs on inial render and upon any changes in the value')
  }, [value])
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setvalue(value + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
