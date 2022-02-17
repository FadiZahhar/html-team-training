//css
import './index.css'

//settig up vars
const books = [
  {
    title: 'The girl who said NO!',
    auther: 'Zoi Tueker',
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/561b1483830519.5d48f1ff93014.jpg',
  },
  {
    title: 'Hello Hippo!',
    auther: 'Aallyah S. Peres',
    img: 'https://pub-static.fotor.com/assets/projects/pages/6b2a8400-1c2b-11e8-9b8a-bbe4815ca77f_f5458c4c-b515-4128-b5cf-0d69cd3c9073_thumb.jpg',
  },
]
//creating an amazon like book store
function DataAsArrays() {
  return <section className='booklist'>{books}</section>
}

// const Book = (props) => {
//   const { img, title, auther } = props
//   return (
//     <article className='book'>
//       <img src={img} alt='book cover' />
//       <h1>{title}</h1>
//       <h2>{auther}</h2>
//     </article>
//   )
// }

export default DataAsArrays
