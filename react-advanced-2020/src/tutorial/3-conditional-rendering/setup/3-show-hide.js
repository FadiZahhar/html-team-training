import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      {show && <Item />}
      <button className='btn' onClick={() => setShow(!show)}>
        {' '}
        show / hide
      </button>
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checksize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checksize)
    return () => {
      window.removeEventListener('resize', checksize)
    }
  })
  return (
    <div>
      <h1>window</h1>
      <h2>size:{size} px </h2>
    </div>
  )
}
export default ShowHide
