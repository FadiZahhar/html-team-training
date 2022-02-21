import React from 'react';
import Context from './context';
import './App.css';
import Example from './custom hook/fetch';
import ReactRout from './react router/Router';



function App() {
  return (
    <div className="App">
        <Context />
         <Example/>
          <ReactRout/>
          
    </div>
  );
}

export default App;
