import React, { useEffect, useState } from 'react';
import './App.css';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDFX6D3p3KR_DgEf1d25cSXBMsQpwSkglQ",
  authDomain: "fir-9-pro-solution.firebaseapp.com",
  projectId: "fir-9-pro-solution",
  storageBucket: "fir-9-pro-solution.appspot.com",
  messagingSenderId: "753852677251",
  appId: "1:753852677251:web:93429dece79b7654b56fb6"
};

initializeApp(firebaseConfig)

function App() {


  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
