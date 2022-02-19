import React, { useState, useContext } from 'react';
import Data from './data';
import './list.css';


// context api
const PersonContext = React.createContext();

function Context() {

  const [people, setPeople] = useState(Data);

  const removePerson = (id) => {
   setPeople((people) =>{return people.filter((person)=> person.id !== id);
   });
  };

  return (
    <PersonContext.Provider value={{removePerson}}>
    <h3>prop drilling</h3>
    <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({people})=> {
  return (
   <>
   {people.map((person)=>{
       return <SinglePerson key={person.id} {...person} />;  
   })}
</>
);
};

const SinglePerson =({id, name})=>{
    const {removePerson} = useContext(PersonContext);
    return (
        <div className='name'>
            <h4>{name}</h4>
            <button className='btn' onClick={()=>removePerson(id)}>Remove</button>
        </div>
    )
}

export default Context;