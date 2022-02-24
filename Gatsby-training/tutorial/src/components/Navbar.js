import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
     <h1>Navbar</h1>
     <ul>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/testing">testing</Link>
      </li>
     </ul>
    </div>
  )
}

export default Navbar