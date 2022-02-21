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
          <Singleperson key={person.id}{...person} removePerson={removePerson}/>
        );
      })}
      
    </>

  );
};

const Singleperson = ({ id, name, removePerson }) => {

  return (

<div>
   <h3>{name}</h3>
   <button onClick={() => removePerson(id)}>remove</button>
</div>
  );
};

export default PropDrilling;