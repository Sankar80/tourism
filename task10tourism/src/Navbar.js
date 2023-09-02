import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <header >
    <h3 className="log">TAMILNADU TOURISM</h3>
    <nav className="items">
      <Link to = "/" className='it'>Home</Link>
      <Link to = "/PlacesToVisit" className='it'>Places To Visit</Link>
      <Link to = "/BestTimeToVisit" className='it'>Best Time To Visit</Link>
      <Link to = "/pk" className='it'>Packages</Link>
      <Link to = "/Food" className='it'>Food</Link>
    </nav>
    </header>
  )
}

export default Navbar