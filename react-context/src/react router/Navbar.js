import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
        <ul style={{listStyle: "none"}}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
             <Link to='about'>About</Link>   
            </li>
            <li>
                <Link to='people'>People</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;