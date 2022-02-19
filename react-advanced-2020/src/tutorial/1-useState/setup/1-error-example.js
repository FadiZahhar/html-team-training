import React from 'react'

const ErrorExample = () => {
  let title = 'random title'

  const handleClick = () => {
    title = 'hello people'
    console.log(title)
    // title did not appear to be changing the value displayed on the screen because we are not rendering the component again
    // moreover we need to save this new value of title between other reders
    //so that is why we need use state
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
