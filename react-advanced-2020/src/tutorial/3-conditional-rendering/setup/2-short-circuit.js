import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello worldy'
  //the way || works in js is that if the first term is falsy it returns the second term other wise it firstValue=text
  const secondValue = text && 'hello world'
  //the way && works in JS is that id first term is truthy retun the second one thus secondValue=helloworld else if the first is false retun it
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'hello worldy'}</h1>
      <h1>{text && 'hello world'}</h1>
    </>
  )
}

export default ShortCircuit
