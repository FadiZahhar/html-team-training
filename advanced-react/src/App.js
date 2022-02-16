import React, {useState} from 'react';
import Example from './Example';
import './App.css';
import {data} from './data';

function App() {

   const [people, setPeople] = useState(data);
   
   const removeHandler = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
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
           }} >Clear items</button>
    </div>
      
    </React.Fragment>
  );
};

export default App;
