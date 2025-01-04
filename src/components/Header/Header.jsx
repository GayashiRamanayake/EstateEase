import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='home-header'>
        <div className="header-content">
            <h2>Discover your dream <span>home,</span> where your<span> story </span> begins..</h2>
            <p>Start a new chapter of your life in a place that perfectly reflects your aspirations.
            Let us help you find the home that inspires your journey</p>
            <Link to='/search'><button>View Properties</button></Link>
        </div>
    </div>
  )
}

export default Header