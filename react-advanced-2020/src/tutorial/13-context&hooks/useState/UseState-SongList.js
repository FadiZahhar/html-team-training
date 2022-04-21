import React, { useState, useEffect, useContext } from 'react'
import SongListForm from './UseState-forms'
import { v4 as uuidv4 } from 'uuid'
import BookContext from './BookContext'

const SongList = () => {
  const { books } = useContext(BookContext)
  const [songs, setSongs] = useState([
    { id: 1, title: 'hello' },
    { id: 2, title: 'radio' },
    { id: 3, title: 'hello again' },
  ])
  const [age, setAge] = useState(20)
  const addSong = (title) => {
    setSongs([...songs, { id: uuidv4(), title }])
  }
  useEffect(() => {
    console.log(songs)
  }, [songs])
  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>
      <SongListForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
      <br />
      <br />
      {books.map((book) => {
        return <li key={book.id}>{book.title}</li>
      })}
    </div>
  )
}

export default SongList
