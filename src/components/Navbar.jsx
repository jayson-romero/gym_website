import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../style'

import logo from '../assets/images/logoWithName.png';

const Navbar = () => {
  return (
    <div className= {`${styles.boxWidth} flex justify-between mt-[0px]`} >
        <Link to='/'> 
          <img src={logo} className="w-[150px]"/>
        </Link>

        <div className='flex gap-[20px] text-[16px] md:text-[20px] mt-auto mb-auto'>
          <Link to="/" className='border-b-4 border-transparent hover:border-b-4 hover:border-red'>
              Home
          </Link>

          <a href='#exercises' className='hover:border-b-4 hover:border-red'>
             Exercises
          </a>
      
        </div>
    </div>
  )
}

export default Navbar