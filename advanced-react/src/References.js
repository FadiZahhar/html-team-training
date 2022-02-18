import React,{useRef} from 'react'
import './references.css';





function References() {
const refInput = useRef(null);


const submitHandler = (e) => {
e.preventDefault();
console.log(refInput.current.value);
} 

  return (
    <>
<form className='reference'>
<input type='text' ref={refInput}></input>
<button type='submit' onClick={submitHandler}>submit</button>

    </form>
    
    </>
  )
}

export default References;