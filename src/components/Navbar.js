import React from 'react';
import './navbar.css';
import {FaCoins} from 'react-icons/fa';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1>Coin <span className='purple'>Data</span></h1>
          
        </div>
    </Link>
  )
}

export default Navbar