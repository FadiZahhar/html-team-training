import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newpeople = [...state.people, action.payload]
    return {
      ...state,
      people: newpeople,
      isModelOpen: true,
      modelContent: 'person added',
    }
  }
  if (action.type == 'NO_VALUE') {
    return { ...state, isModelOpen: true, modelContent: 'no entry is found' }
  }
  throw new Error('no matching')
}
const defaultState = {
  people: [],
  isModelOpen: false,
  modelContent: '',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().setTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  return (
    <>
      {state.isModelOpen && <Modal modelContent={state.modelContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'> add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
