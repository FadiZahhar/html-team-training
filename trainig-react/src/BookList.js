//css
import './index.css'
import { book1, book2 } from './data'

//creating an amazon like book store
function BookList() {
  return (
    <section className='booklist'>
      <Book img={book1.img} title={book1.title} auther={book1.auther}>
        {/* Adding children to only one book. notice we chaged the self closing tags and place what ever children we want between the 2 tags and we can access them via the props.children */}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
          voluptates incidunt qui hic praesentium! Doloribus obcaecati incidunt
          corporis fugiat maxime.
        </p>
      </Book>
      <Book img={book2.img} title={book2.title} auther={book2.auther} />
    </section>
  )
}
//accessing props
// const Book = (props) => {
//   const { img, title, auther } = props
//   return (
//     <article className='book'>
//       <img src={props.img} alt='book cover' />
//       <h1>{props.title}</h1>
//       <h2>{props.auther}</h2>
//     </article>
//   )
// }

const Book = (props) => {
  //second method to access props is destructuring
  const { img, title, auther, children } = props
  return (
    <article className='book'>
      <img src={img} alt='book cover' />
      <h1>{title}</h1>
      <h2>{auther}</h2>
      {children}
    </article>
  )
}

//third method to access props is destructuring directly as attributes
// const Book = ({ img, title, auther }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt='book cover' />
//       <h1>{title}</h1>
//       <h2>{auther}</h2>
//     </article>
//   )
// }

export default BookList
