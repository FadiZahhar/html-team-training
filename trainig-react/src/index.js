import ReactDOM from 'react-dom'
import BookList from './BookList'
import DataAsArrays from './DataAsArrays'

function Home() {
  return (
    <section>
      <div>
        <BookList />
      </div>
      <div>
        <DataAsArrays />
      </div>
    </section>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'))
