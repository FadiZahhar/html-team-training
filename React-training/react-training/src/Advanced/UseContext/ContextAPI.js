import React, { useState, useContext } from 'react';
import { data } from '../../data';


const PersonContext = React.createContext();

// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (

//Now, all components in this tree will have access to removePerson & people.

 <PersonContext.Provider value={{ removePerson, people }}>
    <List />
 </PersonContext.Provider>

  );
};


const List = () => {
   const mainData = useContext(PersonContext);
   console.log(mainData);

   return (

   <>

  {mainData.people.map((person) => {
   return <SinglePerson key={person.id} {...person} />;
  })}
   </>
  );
};


const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (

<div>
    <h2>{name}</h2>
  <button onClick={() => removePerson(id)}>Remove</button>
</div>
  );
};

export default ContextAPI;