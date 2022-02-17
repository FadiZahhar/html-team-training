import './App.css';
import BookList from './Basic/BookList';
import ErrorExample from './Advanced/UseState/ErrorExample';
import UseStateBasics from './Advanced/UseState/UseStateBasics';
import UseStateArray from './Advanced/UseState/UseStateArray';
import UseStateObject from './Advanced/UseState/UseStateObject';
import UseStateCounter from './Advanced/UseState/UseStateCounter';
import Basics from './Advanced/UseEffect/Basics';
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
       <br/><br/><br/><br/>
       <h1>UseStateObject</h1>
      
       <UseStateObject/>
       <br/><br/><br/><br/>
       <h1>UseStateCounter</h1>
       <UseStateCounter/>
       <br/><br/><br/><br/>
       <h1>UseEffectBaics</h1>
       <Basics/>
    </div>
  );
}

export default App;
