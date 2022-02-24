import React, { useEffect, useRef } from 'react'

// preserves value just as useState
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer)
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }
  useEffect(() => {
    refContainer.current.focus()
  })
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}> helloo</div>
    </>
  )
}

export default UseRefBasics
