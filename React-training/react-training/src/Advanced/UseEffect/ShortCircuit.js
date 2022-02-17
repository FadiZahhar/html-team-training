import React, { useState, useEffect } from 'react';

// ternory-operator

const ShortCircuit = () => {
 
 const [text, setText] = useState('my name s');
const firstValue=text || 'hello world';

const SecondValue=text && 'hello world';

  


  return (
 <div style={{backgroundColor:"whitesmoke"}}>
  <h1>{firstValue}</h1>
  <h1>value :{SecondValue} </h1>
 </div>
  );
};

export default ShortCircuit;