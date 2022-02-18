import React, { useState, useEffect } from 'react';


const ShowHide = () => {
 const [show, setShow] = useState(false);


  return (
 <div style={{backgroundColor:"whitesmoke"}}>
 
  <button onClick={()=>setShow(!show)}>show Hide</button>
  {show&& <Item/>}
  


 </div>
  );
};
const Item = ()=> {
  const [size, setSize] = useState(window.innerWidth);

  console.log(size)
  
   const checkSize = () => {
     setSize(window.innerWidth);
  
   };
  
   useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize);
  
    },[]);
 return(
  <div style={{backgroundColor:"rosybrown"}}>size:{size}</div>)
}

;

export default ShowHide;
