import React, {useState, useEffect} from 'react';
import Example from './Example';
import './App.css';
import {data} from './data';

function App() {

   const [people, setPeople] = useState(data);
   const [value, setValue]= useState(0);
   const [size, setSize] = useState(window.innerWidth);
   

  // useEffect
  // second argument
  // cleanup function 
useEffect( ()=>{
   window.addEventListener('resize', checkSize);
   return () =>{
   window.removeEventListener('resize', checkSize);
   };
   }, [size])

   const checkSize = () =>{
     setSize(window.innerWidth);
   }

   const removeHandler = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
   }

   const incrementHandler = () =>{
   setValue(value+1);
   }

   const decrementHandler =() =>{
   setValue(value-1);
   }

   

  return (
    <React.Fragment>
    <div className='App'>
      <Example />
    </div>

    <div className='divv'>
      {people.map((person) => {
        const { id, name} = person;
        return (
        <div key={id} className='people'>
           <h4>{name}</h4>
           <button onClick={() => removeHandler(id)}>remove</button>
        </div>
        );
      })}
       <button onClick={()=>{setPeople([])
           }} style={{ marginTop: '1rem'}} >Clear items</button>
    </div>

       <section className='sec'>
         <h2>regular counter</h2>
         <h1>{value}</h1>
         <button style={{ margin: '1rem'}} onClick = {incrementHandler}>Increment</button>
         <button style={{ margin: '1rem'}} onClick = {decrementHandler}>Decrement</button>
       </section>

       <div className='sec'>
         {size}
       </div>
    </React.Fragment>
  );
};

export default App;
