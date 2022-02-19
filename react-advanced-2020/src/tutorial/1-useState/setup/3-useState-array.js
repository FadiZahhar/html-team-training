import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setpeople] = React.useState(data)
  const removeitem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setpeople(newPeople)
  }
  return (
    <>
      {/* the .map is java script that is why we need a {} */}
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeitem(id)}>
              clear item
            </button>
          </div>
        )
      })}

      <button
        className='btn'
        type='button'
        onClick={() => {
          setpeople([])
        }}
      >
        Clear all
      </button>
    </>
  )
}

export default UseStateArray
