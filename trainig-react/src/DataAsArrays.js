//css
import './index.css'

//settig up array

//small array example on how we access arrays in which map reaches or every single value in the array.
const names = ['john', 'suzy', 'ayla']
const newnames = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})
function DataAsArrays() {
  return <section className='booklist'>{newnames}</section>
}

export default DataAsArrays
