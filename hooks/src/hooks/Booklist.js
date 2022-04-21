import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

function Booklist() {
   
    const {books} = useContext(BookContext);
   
    return(
        <div className='book-list' >
<ul>
    {books.map(book => {
        return (
<li key={book.id} className='book-items'>{book.title}</li>

        )
})}

</ul>
        </div>
    )
  
}

export default Booklist