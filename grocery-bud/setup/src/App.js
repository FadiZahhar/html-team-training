import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditting, setIsEditting] = useState(false)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [editID, setEditID] = useState(null) //which item is being editted

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      //display alert
    } else if (name && isEditting) {
      //deal with edit
    } else {
      setAlert({ ...alert, show: true })
      const newitem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newitem])
      setName('')
    }
  }

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert />}
        <h3>Grocery bub</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='eg. eggs'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <button type='submit' className='submit-btn'>
            {isEditting ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} />
          <button className='clear-btn'> CLear items</button>
        </div>
      )}
    </section>
  )
}

export default App
