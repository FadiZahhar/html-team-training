import React, { useState, useEffect } from 'react';


// by default runs after every re-render
// cleanup function
// second parameter
const Basics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');

  if (value > 0) {
  document.title = `Neww Message(${value})`;
  }
  });

  console.log('render component');
  return (
    <>

 <div style={{backgroundColor:"brown"}}>

 <h2>{value}</h2>

<button className='btn' onClick={()=>setValue(value + 1)}> click me </button>

</div>
</>
  );
};

export default Basics;