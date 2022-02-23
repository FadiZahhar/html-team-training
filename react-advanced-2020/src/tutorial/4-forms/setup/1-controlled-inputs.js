import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName && email) {
      const people = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      }
      // const person = {
      //   id: new Date().getTime().toString(),
      //   firstName,
      //   email,
      // }
      //this is a short hand in react because the key values are the same name of a variable
      setPeople((person) => {
        console.log(person)
        return [...people, person]
      })
      setEmail('')
      setFirstName('')
    }
  }
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>

        {people.map((person) => {
          const { id, firstName, email } = person
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
