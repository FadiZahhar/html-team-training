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

function AddingEvents() {
  return (
    <section>
      <h1>Displaying the same content: Events Added</h1>
      <div className='booklist'>
        {books.map((book) => {
          const { img, title, auther } = book
          return <Book key={book.id} abook={book}></Book>
        })}
      </div>
    </section>
  )
}
const Book = (props) => {
  const { img, title, auther } = props.abook
  const clickHandler = () => {
    alert('hello')
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <p>hover over the card the title will be displayed in the console</p>
      <img src={img} alt='book cover' />
      <h1>{title}</h1>
      <h2>{auther}</h2>
      <p>The code of the following button uses a referance function</p>
      <button type='button' onClick={clickHandler}>
        alert click
      </button>
      <br />
      <p>The code of the following button uses an inline function</p>
      <button
        type='button'
        onClick={() => {
          console.log({ title })
        }}
      >
        console log the tittle
      </button>
    </article>
  )
}
export default AddingEvents
