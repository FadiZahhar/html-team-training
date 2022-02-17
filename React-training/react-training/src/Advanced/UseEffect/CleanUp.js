import React, { useState, useEffect } from 'react';
// cleanup function
// second argument

const CleanUp = () => {
 
 const [size, setSize] = useState(window.innerWidth);

console.log(size)

 const checkSize = () => {
   setSize(window.innerWidth);

 };

 useEffect(() => {
  console.log('useEffect')
  window.addEventListener('resize', checkSize);

  return () => {
   console.log('cleanup')
   //Before we add another event listener we clean it:removeEventListener
    window.removeEventListener('resize', checkSize);
   };
  },[]);
  ///Runs only on the first render
  
  console.log('render')


  return (
 <div style={{backgroundColor:"whitesmoke"}}>
  <h1 style={{backgroundColor:"red"}}>window</h1>
  <h1>{size} PX</h1>
 </div>
  );
};

export default CleanUp;