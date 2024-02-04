import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar '>
      <div className='containers'>
        <div className='logo'>
          <img src="https://img.freepik.com/premium-vector/colorful-bird-illustration-gradient-abstract_343694-1740.jpg" alt="" />
        </div>
        <div className="links">
          <Link className='text-xl font-mono' to='/'>Home</Link>
          <Link className='text-xl font-mono' to='/?cat=art'>Art</Link>
          <Link className='text-xl font-mono' to='/?cat=science'>Science</Link>
          <Link className='text-xl font-mono' to='/?cat=cinema'>Cinema</Link>
          <Link className='text-xl font-mono' to='/?cat=cinema'>Technology</Link>
          <Link className='text-xl font-mono' to='/?cat=design'>Design</Link>
          <Link className='text-xl font-mono' to='/?cat=food'>Food</Link>
          <p className='text-xl font-mono bg-black px-2 text-white rounded '>Jhon</p>
          <p className='text-xl font-mono'>Logout</p>
          <Link className='write text-xl font-mono bg-white px-2 rounded-md hover:text-orange-600 ' to='/write'>Write</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;