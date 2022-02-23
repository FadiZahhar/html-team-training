import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    
                    <Link to='about'>about</Link>
                </li>
                 <li>
                    <Link to='/'>
                    Home
                    </Link>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar