import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
     <div className='toggleButton'> 
        <button> Click me </button>
     </div>
     <div className='links'>
        <Link to="/pages/Home"> Home </Link>
        <Link to="/pages/Projects"> Projects </Link>
        <Link to="/pages/Experience"> Experience </Link>
     </div>
    </div>
  )
}

export default Navbar;      