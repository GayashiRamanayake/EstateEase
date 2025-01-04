// PropertySlider.js
import React, { useState, useEffect } from 'react';
import './PropertySlider.css'; // CSS file for styling

const PropertySlider = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [properties.length]);

  const currentProperty = properties[currentIndex];

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={currentProperty.pictures[0]}
          alt={`Property ${currentProperty.id}`}
          className="slider-image"
        />
        <div className="slider-details">
          <p className="slider-price">Price: £{currentProperty.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;
