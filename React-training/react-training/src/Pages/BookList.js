import React from 'react'
import './BookList.css'
import {books} from './Books'
//Nested componenent,

function BookList ()  {
  return (
  <>
     {/* React.createElement('div',{}, React.createElement('h1',{},'hello world')) */}
     <section className='booklist'>
     {books.map((book) => {
        // return <Book key={book.id} book={book}>
        return <Book key={book.id} {...book}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Book>;
      })}

</section>
</>
  )
}
const Book = (props)=> {
  //setup vars
  // const title='best product';
  // const {title}=props;

  // object 

  // const firstbook={
  //   title:'best product'
  // }

  // array of objects
//   const books=[
//     {title:'best product',
//   },
//   {
//     title:'hello',
//   }
// ]



// const {title}=props.book

// attribute,eventhandler
//onclick ,onMouseOver

const clickHandler =(e)=>{
  console.log(e.target)
  alert('hello world')
} 

const complex=(title)=>{
alert(title)
}
  return (
  <article className='book' onMouseOver={()=>complex(props.title)}> 
  <Image/>
  <h1>title:{props.title}</h1><h4 >2000</h4>
  <p>{ props.job}</p>
    <p>{ props.children}</p>
    <button onClick={clickHandler}>reference</button>
    <button onClick={()=>complex(props.title)}>reference</button>
  </article>
  )
};

const Image = ()=> <img src="https://ecom.waihas.com/storage/products/PEQDl0XZrNZ73R5hXKGRksYYp.jpg" ></img>;
{/* <h4 style={{colo:"black"}}>2000</h4> */}
export default BookList