import React from 'react'
import {Link} from "react-router-dom"
import "../style/navbar.css"

function Navbar() {
  return (
    <div>
    <ul className="navbar">
        <li className='logo'>redbasil</li>
        <li><Link to="/" className='home'>Home</Link></li>
        <li><Link to="/service">What we do</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    </div>
  )
}
export default Navbar;