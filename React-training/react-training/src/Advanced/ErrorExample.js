import React from 'react'

const Error = () => {
 let title="random title";
 const handleclick=()=>{
  title="hello world ";

 }
  return (
    <div>
     <h2>
      {title}
     </h2>
     <button type='button' onClick={()=>handleclick}>change</button>
    </div>
  )
}

export default Error