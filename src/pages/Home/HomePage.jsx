// HomePage.jsx
import React from 'react';
import Header from '../../components/Header/Header'; // Ensure the correct path
import PropertySlider from '../../components/PropertySlider/PropertySlider'; // Ensure the correct path
import './HomePage.css'; // Ensure the correct path for CSS file

// JSON Data for properties
const properties = [
  {
    id: "prop1",
    price: 750000,
    pictures: ["/PropImages/prop1/11.jpg", "/PropImages/prop1/12.jpg"],
  },
  {
    id: "prop2",
    price: 399995,
    pictures: ["/PropImages/prop2/21.jpg", "/PropImages/prop2/22.jpg"],
  },
  {
    id: "prop3",
    price: 850000,
    pictures: ["/PropImages/prop3/31.jpg", "/PropImages/prop3/32.jpg"],
  },
  {
    id: "prop4",
    price: 275000,
    pictures: ["/PropImages/prop4/41.jpg", "/PropImages/prop4/42.jpg"],
  },
  {
    id: "prop5",
    price: 625000,
    pictures: ["/PropImages/prop5/51.jpg", "/PropImages/prop5/52.jpg"],
  },
  {
    id: "prop6",
    price: 350000,
    pictures: ["/PropImages/prop6/61.jpg", "/PropImages/prop6/62.jpg"],
  },
  {
    id: "prop7",
    price: 475000,
    pictures: ["/PropImages/prop7/71.jpg", "/PropImages/prop7/72.jpg"],
  },
  {
    id: "prop8",
    price: 305000,
    pictures: ["/PropImages/prop8/81.jpg", "/PropImages/prop8/82.jpg"],
  },
];

// HomePage Component
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>
            Explore the best properties at unbeatable prices. Whether you're looking for
            a house, flat, or apartment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="slider-content-container">
        <div className="slider-section">
          <PropertySlider properties={properties} />
        </div>
        <div className="content-section">
          <h2>Why Choose Us?</h2>
          <p>
            Discover your dream property with our exclusive listings. Whether you're looking for a cozy home or a luxury estate, we have something for everyone.
          </p>
          <ul>
            <li>Wide range of properties</li>
            <li>Expert advice</li>
            <li>Exceptional customer service</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Dream Properties. All Rights Reserved.</p>
          <p>Follow us on:</p>
          <div className="social-icons">
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
