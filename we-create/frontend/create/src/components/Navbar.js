import React from 'react'
import {Link} from 'react-router-dom'
import '../style/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav-ul'>
        <li><Link to='/'><h1>WeCreate</h1></Link></li>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/add'>Add Product</Link></li>
        <li><Link to='/update'>Update Product</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;
