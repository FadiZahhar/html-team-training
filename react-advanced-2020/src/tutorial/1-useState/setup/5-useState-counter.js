import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setvalue] = useState(0)
  const reset = () => setvalue(0)
  const complexIncrease = () => {
    setTimeout(() => {
      setvalue((prev) => {
        return prev + 1
      })
    }, 2000)
  }
  return (
    <>
      <section>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setvalue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setvalue(value + 1)}>
          increase
        </button>
        <button className='btn' onClick={() => reset()}>
          reset
        </button>
      </section>
      <section>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
