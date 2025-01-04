import React from 'react'
import "./Home.css";
import searchImage from '../images/search-home2.jpg';


export default function Home() {
  return (
    <section className="home-wrapper">
      <div className="home-container">
        {/*left side*/}
        <div className="home-content-left">
          <div className="home-title">
            <h1>Discover your dream home,
            <br /> where your story begins</h1>
          </div>

          <div className="home-desc">
            <span>Start a new chapter of your life in a place that perfectly reflects your aspirations.</span>
            <span>Let us help you find the home that inspires your journey</span>
          </div>
          
        </div>

        {/*right side*/}
        <div className="home-content-right">

          <div className="image-container">
          <img src={searchImage} alt="Example" />
          </div>

        </div>

      </div>
    </section>
  )
}
