import React,{useState, useContext} from 'react';
import Data from './data';
import List from './list';

function Context() {

  const [people, setPeople] = useState(Data);

  const removePerson = (id) => {
   setPeople((people) =>{return people.filter((person)=> person.id !== id);
   });
  };

  
  return (
      <section>
    <h3>prop drilling</h3>
    <List people={people} removePerson={removePerson}/>
    </section>
  )
}

export default Context;