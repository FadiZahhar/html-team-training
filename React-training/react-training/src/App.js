import './App.css';
import BookList from './Basic/BookList';
import ErrorExample from './Advanced/ErrorExample';
import UseStateBasics from './Advanced/UseStateBasics';
import UseStateArray from './Advanced/UseStateArray';
function App() {
  return (
    <div className="App">
       <BookList/>
       <ErrorExample/>
       <h1>UseStateBasics</h1>
       <UseStateBasics/>
       <br/><br/><br/><br/>
       <h1>UseStateArray</h1>
       <UseStateArray/>
    </div>
  );
}

export default App;
