import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });




  const changeMessage = () => {
   // copy old person and set new message
    setPerson({ ...person, message: 'hello world' });
  };

  return (
    <>
<h4>{person.name}</h4>

<h4>{person.age}</h4>

 <h4>{person.message}</h4>
<button className='btn' onClick={changeMessage}>change message </button>
    </>
  );
};

export default UseStateObject;