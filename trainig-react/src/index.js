import react from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//creating an amazon like book store
function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}
const Book = () => {
  const title = 'The girl who said NO!'
  return (
    <article className='book'>
      <img
        src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/561b1483830519.5d48f1ff93014.jpg'
        alt='book cover'
      />
      {/* to access js in jsx use {} */}
      <h1>{title.toUpperCase()}</h1>
      <h2>Zoi Tueker</h2>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
