import Navbar from './hooks/useState/Navbar';
import Home from './hooks/useState/Home';
import Data from './hooks/useState/Data'


import './App.css';

function App() {

  return (
   <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div>
         <span className="example2"> use custom hook Example:</span>
   <Data/>
      </div>
    </div>
  );
}

export default App;
