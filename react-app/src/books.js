import react from "react";

function Book(props) {
// events
const clickHandler = (e) =>{
    console.log(e);}

    const {img, title, author} = props;
  return (
    <article className="book" onMouseOver={()=>{console.log(title)}}>
        <img src = {img} alt='book img'/>
        <h4>{title}</h4>
        <p>{author}</p>
        <button onClick={clickHandler}>Click me</button>
      </article>
  )
}

export default Book;