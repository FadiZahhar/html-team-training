import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
    <div className={`model-overlay`}>
      <div className='model-container'>
        <h3>modal content</h3>
        <button className='close-model-btn'>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
