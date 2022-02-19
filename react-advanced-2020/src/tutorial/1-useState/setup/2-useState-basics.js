import React, { useState } from 'react'
//useState take an initial value - could be a string boolean number ... al JS data types
//the diclaration must be inside the component
const UseStateBasics = () => {
  const [Title, setTitle] = useState('holla!')
  const myfunction = () => {
    if (Title === 'random title') {
      setTitle('holla!')
    } else {
      setTitle('random title')
    }
  }
  return (
    <React.Fragment>
      <h2>{Title}</h2>
      <button type='button' className='btn' onClick={myfunction}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics

//all hooks follow the following rules
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally
