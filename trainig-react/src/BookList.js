//css
import './index.css'

//settig up vars
const book1 = {
  title: 'The girl who said NO!',
  auther: 'Zoi Tueker',
  img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/561b1483830519.5d48f1ff93014.jpg',
}

const book2 = {
  title: 'Hello Hippo!',
  auther: 'Aallyah S. Peres',
  img: 'https://pub-static.fotor.com/assets/projects/pages/6b2a8400-1c2b-11e8-9b8a-bbe4815ca77f_f5458c4c-b515-4128-b5cf-0d69cd3c9073_thumb.jpg',
}
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
