import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditting, setIsEditting] = useState(false)
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  })
  const [editID, setEditID] = useState(null) //which item is being editted

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter a value')
    } else if (name && isEditting) {
      //deal with edit
    } else {
      showAlert(true, 'success', `the item ${name} has been added to your list`)

      const newitem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newitem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
    // a short cut for setAlert(show:show,type:type,msg:msg)
  }
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
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
