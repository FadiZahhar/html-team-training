import React from 'react';
import { Link } from 'react-router-dom';

const Navbaar = () => {
  return (
   <div>
    fdg
 <nav>
  <ul>
     <li>
       <Link to='/Home'>Home</Link>
      </li>
       <li>
        <Link to='/people'>People</Link>
        </li>
   </ul>
    </nav>
    </div>
  );
};

export default Navbaar;