import React from 'react';
import './list.css';

function List({people, removePerson}) {
  return (
   <>
   {people.map((person)=>{
       return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>;
   })}
</>
);
};

const SinglePerson =({id, name, removePerson})=>{
    return (
        <div className='name'>
            <h4>{name}</h4>
            <button className='btn' onClick={()=>removePerson(id)}>Remove</button>
        </div>
    )
}
export default List;