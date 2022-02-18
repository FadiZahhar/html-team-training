//css
import './index.css'

//settig up array
const books = [
  {
    id: 1,
    title: 'The girl who said NO!',
    auther: 'Zoi Tueker',
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/561b1483830519.5d48f1ff93014.jpg',
  },
  {
    id: 2,
    title: 'Hello Hippo!',
    auther: 'Aallyah S. Peres',
    img: 'https://pub-static.fotor.com/assets/projects/pages/6b2a8400-1c2b-11e8-9b8a-bbe4815ca77f_f5458c4c-b515-4128-b5cf-0d69cd3c9073_thumb.jpg',
  },
]

function DataAsArrays() {
  return (
    <section>
      <h1>Displaying the same content: data being fed in array</h1>
      {/* remember map returns a new array with the same size as the original one */}
      <div className='booklist'>
        {books.map((book) => {
          const { img, title, auther } = book
          return <Book key={book.id} abook={book}></Book>
          //in the previous line the book that was passed is an object that is why when distructuring it in the props we said props.abook and then access the elements
          //here is another way
          // return <Book key={book.id} {...book}></Book>
          //these 3 dots means that we are not passing it as an object we are distructuring it here and then passing it
        })}
      </div>
    </section>
  )
}
const Book = (props) => {
  const { img, title, auther } = props.abook
  return (
    <article className='book'>
      <img src={img} alt='book cover' />
      <h1>{title}</h1>
      <h2>{auther}</h2>
    </article>
  )
}
export default DataAsArrays
