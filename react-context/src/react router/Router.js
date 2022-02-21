import React from "react";

import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Navbar from "./Navbar";

const ReactRout =()=>{
return (
    <div>
        <Navbar/>
<Routes>
<Route path="/" element={ <Home/> } />
<Route path="about" element={ <About/> } />
<Route path="people" element={ <People/> } />
<Route path="*" element={ <Error/> } />
</Routes>

   </div>
)

}

export default ReactRout;