import React, { useState, useEffect } from 'react';

// ternory-operator

const ShortCircuit = () => {
 const [isError, setIsError] = useState(false);

 const [text, setText] = useState('my name s');
const firstValue=text || 'hello world';

const SecondValue=text && 'hello world';

  


  return (
 <div style={{backgroundColor:"whitesmoke"}}>
  <h1>{firstValue}</h1>
  <h1>value :{SecondValue} </h1>
  <></>
  <h1>or</h1>
  <h1>{text || 'hello world'}</h1>
  <h1>value :{text && 'hello world'} </h1>
<br/>
  <button onClick={()=>setIsError(!isError)}>Toggle Error</button>
  {isError &&<h3>  error...</h3> }
  {isError ?(<h3>  error...</h3>): (<h3>  No error...</h3>)}


 </div>
  );
};

export default ShortCircuit;