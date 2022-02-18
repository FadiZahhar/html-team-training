import ReactDOM from 'react-dom'
import BookList from './BookList'
import DataAsArrays from './DataAsArrays'
import AddingEvents from './AddingEvents'

function Home() {
  return (
    <section>
      <div>
        <BookList />
      </div>
      <div>
        <DataAsArrays />
      </div>
      <div>
        <AddingEvents />
      </div>
    </section>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'))
