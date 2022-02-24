import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
import { reducer } from './reducer'
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

  const closeModel = () => {
    dispatch({ type: 'CLOSE_MODEL' })
  }
  return (
    <>
      {state.isModelOpen && (
        <Modal closeModel={closeModel} modelContent={state.modelContent} />
      )}
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
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }}
            >
              Remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
