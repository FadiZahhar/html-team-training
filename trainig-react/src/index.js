import react from 'react'
import ReactDOM from 'react-dom'

// css  - we need to import full path cz it is not a dependancy
//this css method is good for relatively small projects
import './index.css'
//Nested component , react tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}
//implicit return example
const Person = () => <h2> lora</h2>

//implicit return example
const Message = () => {
  return <p>this is my message</p>
}

//****************************************** */

//creating an amazon like book store
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Auther />
    </article>
  )
}
const Auther = () => {
  return (
    //inline styling
    <h2 style={{ color: '#617d38', fontSize: '1.25rem', marginTop: '0.25rem' }}>
      Zoi Tueker
    </h2>
  )
}
const Title = () => {
  return <h1> The girl who said NO!</h1>
}
const Image = () => {
  return (
    <img
      src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/561b1483830519.5d48f1ff93014.jpg'
      alt='book cover'
    />
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
