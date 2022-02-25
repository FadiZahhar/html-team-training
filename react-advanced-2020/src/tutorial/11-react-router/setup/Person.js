import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
import { Link, useParams } from 'react-router-dom'
const Person = () => {
  const [name, setName] = useState('h')
  const { id } = useParams()
  useEffect(() => {
    const myname = data.find((person) => person.id === parseInt(id))

    setName(myname.name)
  }, [])
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people'> go back</Link>
    </div>
  )
}

export default Person
