import React, { useState, useEffect } from 'react';
import './PropertySlider.css';

// PropertySlider Component
// Displays a slider that cycles through property images and prices every 2 seconds
const PropertySlider = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current property index

  // Effect: Automatically move to the next slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current index to the next property
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 2000); // Interval duration (2 seconds)

    // Cleanup: Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [properties.length]); // Dependency: Re-run effect when properties length changes

  // Current property to be displayed
  const currentProperty = properties[currentIndex];

  return (
    <div className="slider-container">
      {/* Slider Wrapper */}
      <div className="slider">
        {/* Display the first image of the current property */}
        <img
          src={currentProperty.pictures[0]}
          alt={`Property ${currentProperty.id}`}
          className="slider-image"
        />
        
        {/* Display property details */}
        <div className="slider-details">
          {/* Display the property price */}
          <p className="slider-price">
            Price: £{currentProperty.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;
