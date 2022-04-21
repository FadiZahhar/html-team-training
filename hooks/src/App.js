import Navbar from './hooks/Navbar';
import Home from './hooks/Home';
import Data from './hooks/Data'


import './App.css';

function App() {

  return (
   <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
     
    </div>
  );
}

export default App;
