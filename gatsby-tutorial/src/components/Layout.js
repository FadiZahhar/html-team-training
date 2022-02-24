import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/main.css';
import 'normalize.css';

function Layout({children}) {
  return (
    <div>
        <Navbar/>
         {children}
        <Footer/>
    </div>
  )
}

export default Layout