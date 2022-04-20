import Navbar from './hooks/useState/Navbar';
import Home from './hooks/useState/Home';

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
