import './App.css';
import { BrowserRouter as Router, Route,Routes,Switch } from 'react-router-dom';
import Navbaar from './Pages/Navbaar';
import Person from'./Pages/Person';
import Home from './Pages/Home';
import People from './Pages/People';
function App() {
  return (
<Router>
   <Navbaar />
 <Switch>
     
  {/* one replaces exact path to path it will match every path starting with '/', 
  since the is inside the so, it will match the first path and don't check for the other matches. */}
    <Route path='/people'>
       <People />
     </Route>
     <Route path='/person/:id' children={<Person />}></Route>
      {/* <Route path='*'>
      
    </Route> */}
   </Switch>
 </Router>
  );
}

export default App;
