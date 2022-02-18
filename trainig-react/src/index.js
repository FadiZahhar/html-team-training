import ReactDOM from 'react-dom'
import BookList from './BookList'
import DataAsArrays from './DataAsArrays'
import Events from './AddingEvents'
// since in AddingEvents the export was default we can call it whatever we want
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
        <Events />
      </div>
    </section>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'))
