import React, {useState} from 'react'

// component name must be uppercase
function Example() {
    let title = 'Random title';
    // use state
    // all hooks should be located at the top of the component
    // cannot call the hook conditionally
    const [text, setText] = useState(title);
    const clickHandler= () => {
      setText('Title changed')
    }
  return (
    <React.Fragment>

         <h2>{text}</h2>
         <button onClick={clickHandler}>Change title</button>

    </React.Fragment>
  )
}

export default Example;