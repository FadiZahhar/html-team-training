import React, { useState } from 'react'
import SongListForm from './UseState-forms'
import { v4 as uuidv4 } from 'uuid'

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'hello' },
    { id: 2, title: 'radio' },
    { id: 3, title: 'hello again' },
  ])
  const addSong = (title) => {
    setSongs([...songs, { id: uuidv4(), title }])
  }
  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>
      <SongListForm addSong={addSong} />
    </div>
  )
}

export default SongList
