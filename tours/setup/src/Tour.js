import React, { useState } from 'react'

const Tour = (props) => {
  const { id, image, info, name, price } = props.tour
  return (
    <article className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div classname='tour-info'>
          <h4> {name}</h4>
        </div>
        <div classname='tour-price'>${price}</div>
        <p>{info}</p>
        <button className='delete-btn'>Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour
