import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../assets/images/logoWithName.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center m-[20px] mt-[0px]'>
        <Link to='/'> 
          <img src={logo} className="w-[150px]"/>
        </Link>

        <div>
          <Link to="/">
              Home
          </Link>

    
          <a href='#exercises'>
             Exercises
          </a>
      
        </div>
    </div>
  )
}

export default Navbar