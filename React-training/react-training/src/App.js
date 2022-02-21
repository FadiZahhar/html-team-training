import './App.css';
import BookList from './Basic/BookList';
import ErrorExample from './Advanced/UseState/ErrorExample';
import UseStateBasics from './Advanced/UseState/UseStateBasics';
import UseStateArray from './Advanced/UseState/UseStateArray';
import UseStateObject from './Advanced/UseState/UseStateObject';
import UseStateCounter from './Advanced/UseState/UseStateCounter';
import Basics from './Advanced/UseEffect/Basics';
import CleanUp from './Advanced/UseEffect/CleanUp';
import FetchData from './Advanced/UseEffect/FetchData';
import { MultipleReturn } from './Advanced/UseEffect/MultipleReturn';
import ShortCircuit from './Advanced/UseEffect/ShortCircuit';
import ShowHide from './Advanced/UseEffect/ShowHide';
import ControlledInputs from './Advanced/Form/ControlledInputs ';
import UseRefBasics from './Advanced/UseRef\'/UseRefBasics';
import Index from './Advanced/UseReducer/Index';
import PropDrilling from './Advanced/PropDrilling';
import ContextAPI from './Advanced/UseContext/ContextAPI';
import Exemple from './Advanced/UseFetch/Exemple'
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
       <br/><br/><br/><br/>
       <h1>UseEffectCleanUp</h1>
       <CleanUp/>
       <br/><br/><br/><br/>
       <h1>FetchData</h1>
       <FetchData/>
       <br/><br/><br/><br/>
       <h1>MultipleReturn</h1>
       <br/><br/>
       <MultipleReturn/>
       <br/><br/><br/><br/>
       <h1>ShortCircuit</h1>
       <ShortCircuit/>
       <br/><br/>
       <br/><br/><br/><br/>
       <h1>ShowHide</h1>
       <ShowHide/>
       <br/><br/>
       <br/><br/><br/><br/>
       <h1>ControlledInputs</h1>
       <ControlledInputs/>
       <br/><br/><br/><br/>
       <h1>UseRef</h1>
       <UseRefBasics/>
       <br/><br/><br/><br/>
       <h1>UseReducer</h1>
       <Index/>
       <br/><br/><br/><br/>
       <h1>PropDrilling</h1>
       <PropDrilling/>
       <br/><br/><br/><br/>
       <h1>Context API / useContext</h1>
       <br/><br/>
       <ContextAPI/>
       <br/><br/><br/><br/>
       <h1>useFetch</h1>
       <br/><br/>
       <Exemple/>
    </div>
  );
}

export default App;
