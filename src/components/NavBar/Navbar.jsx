import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <header className='header'>
      <div className="header-box">

        <Link to='/home' className='link-list'>
        <h1 className='header-logo'>
          <span className='header-logo-first'>Estate</span>
          <span className='header-logo-second'>Ease</span>
        </h1>
        </Link>

        <ul className="header-list">
          <Link to='/home' className='link-list'><li className="header-list-item">Home</li></Link>
          <Link to='/buy' className='link-list'><li className="header-list-item">Buy</li></Link>
          <Link to='/rent' className='link-list'><li className="header-list-item">Rent</li></Link>
        </ul>

      </div>
    </header>


  )
}
