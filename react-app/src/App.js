import React, {useState} from "react";
import Book from './books';
// CSS
import './index.css';

// JSX rules
// return single element
// div/ section/ article or fragment
// use camel casw for html attribute
// className instead of class
// close every element
// formatting


// set up variable
const books = [{

img : "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
title : 'I love you to the moon and back',
author : 'Tim Warnes',
id : 1,
},

{
img : "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
title : 'Our class is a family',
author : 'Shanon Olsen',
id : 2,
},
{
img : "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
title : 'The Vanishing Half',
author : 'Brit Bennett',
id : 3,
},
]

// nested components
// working with props
function App () {

    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);


    return (
    <section className="booklist">



 {books.map((book)=>{
return <Book img = {book.img} title={book.title} author={book.author} key = {book.id}>{book}</Book>;
 })}


{/* short circuit evaluation */}
{/* ternary operators */}
<h1>{text || 'john doe'}</h1>
{isError && <h2>Error...</h2>}
<button onClick={() =>{setIsError(!isError)}}style={{width:'5rem'}}>toggle error</button>

    </section>
    )


};



export default App;