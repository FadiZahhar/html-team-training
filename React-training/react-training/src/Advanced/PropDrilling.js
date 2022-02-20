import React, { useState } from 'react';
import { data } from '../data';


const PropDrilling = () => {
  const [peoples, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    
<section>
  <List people={peoples} removePerson={removePerson} />
</section>
  );
};

const List = ({ people, removePerson }) => {
  return (

    <>

      {people.map((person) => {
        return (
          <SinglePerson key={person.id}{...person} removePerson={removePerson}/>
        );
      })}
      
    </>

  );
};

const SinglePerson = ({ id, name, removePerson }) => {

  return (

<div>
   <h3>{name}</h3>
   <button onClick={() => removePerson(id)}>remove</button>
</div>
  );
};

export default PropDrilling;