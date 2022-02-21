import React, { useState, useEffect } from 'react';
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
  const [name, setName] = useState('default-name');

  // Now to get the value of our :id we should use useParams hook
  // This hook returns us an object containing all parameters and values present in our route.

  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
    console.log(newPerson)
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Person;