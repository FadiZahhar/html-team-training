import React from "react";
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
const title = 'I love you to the moon and back';
const author = 'Tim Warnes';
const img = "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

// nested components
function App () {
    return (
    <section className="booklist">
    <Book job ='developer'/>
    <Book title= 'book' />
    <Book/>
    
    </section>
    )
};


function Book(props) {
  return (
    <article>
        <img src = {img}/>
        <p>{title}</p>
        <p>{author}</p>
        <p>{props.job}</p>
        <p>{props.title}</p>
    </article>
  )
}


export default App;