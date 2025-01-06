// import React, { useState } from "react";
// import propertiesData from "./data/properties.json";
// import { useNavigate } from "react-router-dom";
// import "./Search.css";

// export default function Search() {
//   const [filteredProperties, setFilteredProperties] = useState(
//     propertiesData.properties
//   );
//   const [favorites, setFavorites] = useState([]);

//   const monthToNumber = {
//     January: 1,
//     February: 2,
//     March: 3,
//     April: 4,
//     May: 5,
//     June: 6,
//     July: 7,
//     August: 8,
//     September: 9,
//     October: 10,
//     November: 11,
//     December: 12,
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const propertyType = formData.get("propertyType");
//     const searchArea = formData.get("searchArea");
//     const minBedrooms = parseInt(formData.get("NoOfBedroomMin"), 10) || 0;
//     const maxBedrooms = parseInt(formData.get("NoOfBedroomMax"), 10) || Infinity;
//     const minPrice = parseInt(formData.get("priceMin"), 10) || 0;
//     const maxPrice = parseInt(formData.get("priceMax"), 10) || Infinity;
//     const startDate = formData.get("startDate")
//       ? new Date(formData.get("startDate"))
//       : null;
//     const endDate = formData.get("endDate")
//       ? new Date(formData.get("endDate"))
//       : null;

//     const filtered = propertiesData.properties.filter((property) => {
//       const addedDate = new Date(
//         property.added.year,
//         monthToNumber[property.added.month] - 1,
//         property.added.day
//       );

//       return (
//         (propertyType === "type" || property.type === propertyType) &&
//         (searchArea === "area" || property.location.includes(searchArea)) &&
//         property.bedrooms >= minBedrooms &&
//         property.bedrooms <= maxBedrooms &&
//         property.price >= minPrice &&
//         property.price <= maxPrice &&
//         (!startDate || addedDate >= startDate) &&
//         (!endDate || addedDate <= endDate)
//       );
//     });

//     setFilteredProperties(filtered);
//   };

//   const navigate = useNavigate();

//   const handleExploreMore = (id) => {
//     console.log("Navigating to property ID:", id);
//     navigate(`/properties/${id}`);
//   };

//   const addToFavorites = (property) => {
//     if (!favorites.some((fav) => fav.id === property.id)) {
//       setFavorites([...favorites, property]);
//     }
//   };

//   const removeFromFavorites = (propertyId) => {
//     setFavorites(favorites.filter((fav) => fav.id !== propertyId));
//   };

//   const handleDragStart = (event, property) => {
//     event.dataTransfer.setData("property", JSON.stringify(property));
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const propertyData = event.dataTransfer.getData("property");
//     const property = JSON.parse(propertyData);
//     addToFavorites(property);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault(); // Allow dropping
//   };

//   return (
//     <div className="page-wrapper">
//       <main className="main-layout">
//         {/* Search Section */}
//         <section className="left-section">
//           <div className="Search-container">
//             <form className="Search-form" onSubmit={handleSearch}>
//               <h2 className="section-title">Search Properties</h2>
//               <div className="form-row">
//                 <div className="form-item">
//                   <label>Property Type:</label>
//                   <select id="propertyType" name="propertyType">
//                     <option value="type">All Types</option>
//                     <option value="house">House</option>
//                     <option value="flat">Flat</option>
//                     <option value="bungalow">Bungalow</option>
//                     <option value="maisonette">Land</option>
//                     <option value="apartment">Apartment</option>
//                   </select>
//                 </div>

//                 <div className="form-item">
//                   <label>Search Area:</label>
//                   <select id="searchArea" name="searchArea">
//                     <option value="area">Any Area</option>
//                     <option value="BR1">BR1</option>
//                     <option value="BR2">BR2</option>
//                     <option value="BR3">BR3</option>
//                     <option value="BR4">BR4</option>
//                     <option value="BR5">BR5</option>
//                     <option value="BR6">BR6</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-item">
//                   <label>No of Bedrooms:</label>
//                   <select id="NoOfBedroomMin" name="NoOfBedroomMin">
//                     <option value="">No Min</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                   </select>
//                   <select id="NoOfBedroomMax" name="NoOfBedroomMax">
//                     <option value="">No Max</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                   </select>
//                 </div>

//                 <div className="form-item">
//                   <label>Price Range:</label>
//                   <select id="priceMin" name="priceMin">
//                     <option value="">Min Price</option>
//                     {Array.from({ length: 20 }, (_, i) => (
//                       <option value={(i + 1) * 50000} key={`min-${i + 1}`}>
//                         ${(i + 1) * 50000}
//                       </option>
//                     ))}
//                   </select>
//                   <select id="priceMax" name="priceMax">
//                     <option value="">Max Price</option>
//                     {Array.from({ length: 20 }, (_, i) => (
//                       <option value={(i + 1) * 50000} key={`max-${i + 1}`}>
//                         ${(i + 1) * 50000}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-item">
//                   <label>Date Added:</label>
//                   <input type="date" id="startDate" name="startDate" />
//                   <input type="date" id="endDate" name="endDate" />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <button type="submit" className="search-button">
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>

//           <div className="results-container">
//             <h2 className="section-title">Our Properties</h2>
//             {filteredProperties.length > 0 ? (
//               <div className="property-gallery">
//                 {filteredProperties.map((property) => (
//                   <div
//                     key={property.id}
//                     className="property-card"
//                     draggable
//                     onDragStart={(event) => handleDragStart(event, property)}
//                   >
//                     <img
//                       src={property.picture}
//                       alt={property.type}
//                       className="property-image"
//                     />
//                     <div className="property-details">
//                       <h3>{property.type}</h3>
//                       <p>{property.location}</p>
//                       <p>{property.shortdescription}</p>
//                       <p>
//                         {new Intl.NumberFormat("en-US", {
//                           style: "currency",
//                           currency: "USD",
//                         }).format(property.price)}
//                       </p>
//                       <button
//                         onClick={() => addToFavorites(property)}
//                         className="add-favorite-button"
//                       >
//                         Add to Favorites
//                       </button>
//                       <button
//                         onClick={() => handleExploreMore(property.id)}
//                         className="explore-button"
//                       >
//                         Explore More
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="no-results">No properties match your search.</p>
//             )}
//           </div>
//         </section>

//         {/* Favorites Section */}
//         <aside
//           className="favourites-list"
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//         >
//           <h2>Favorites</h2>
//           {favorites.length > 0 ? (
//             favorites.map((fav) => (
//               <div key={fav.id} className="favourite-item">
//                 <img src={fav.picture} alt={fav.type} />
//                 <div>
//                   <h3>{fav.type}</h3>
//                   <button
//                     onClick={() => removeFromFavorites(fav.id)}
//                     className="remove-button"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>Drag properties here or click "Add to Favorites".</p>
//           )}
//         </aside>
//       </main>
//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="footer-content">
//           <p>&copy; 2025 EstateEase. All Rights Reserved.</p>
//           <p>Follow us on:</p>
//           <div className="social-icons">
//             <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";
import propertiesData from "./data/properties.json";
import { useNavigate } from "react-router-dom";
import "./Search.css";

export default function Search() {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties
  );
  const [favorites, setFavorites] = useState([]);

  const monthToNumber = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const propertyType = formData.get("propertyType");
    const searchArea = formData.get("searchArea");
    const minBedrooms = parseInt(formData.get("NoOfBedroomMin"), 10) || 0;
    const maxBedrooms = parseInt(formData.get("NoOfBedroomMax"), 10) || Infinity;
    const minPrice = parseInt(formData.get("priceMin"), 10) || 0;
    const maxPrice = parseInt(formData.get("priceMax"), 10) || Infinity;
    const startDate = formData.get("startDate")
      ? new Date(formData.get("startDate"))
      : null;
    const endDate = formData.get("endDate")
      ? new Date(formData.get("endDate"))
      : null;

    const filtered = propertiesData.properties.filter((property) => {
      const addedDate = new Date(
        property.added.year,
        monthToNumber[property.added.month] - 1,
        property.added.day
      );

      return (
        (propertyType === "type" || property.type === propertyType) &&
        (searchArea === "area" || property.location.includes(searchArea)) &&
        property.bedrooms >= minBedrooms &&
        property.bedrooms <= maxBedrooms &&
        property.price >= minPrice &&
        property.price <= maxPrice &&
        (!startDate || addedDate >= startDate) &&
        (!endDate || addedDate <= endDate)
      );
    });

    setFilteredProperties(filtered);
  };

  const handleClearSearch = () => {
    setFilteredProperties(propertiesData.properties); // Reset search results
    document.querySelector(".Search-form").reset(); // Reset form fields
  };

  const navigate = useNavigate();

  const handleExploreMore = (id) => {
    navigate(`/properties/${id}`);
  };

  const addToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  const clearFavorites = () => {
    setFavorites([]); // Clear all favorites
  };

  const handleDragStart = (event, property) => {
    event.dataTransfer.setData("property", JSON.stringify(property));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const propertyData = event.dataTransfer.getData("property");
    const property = JSON.parse(propertyData);
    addToFavorites(property);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow dropping
  };

  return (
    <div className="page-wrapper">
      <main className="main-layout">
        {/* Search Section */}
        <section className="left-section">
          <div className="Search-container">
            <form className="Search-form" onSubmit={handleSearch}>
              <h2 className="section-title">Search Properties</h2>
              <div className="form-row">
                <div className="form-item">
                  <label>Property Type:</label>
                  <select id="propertyType" name="propertyType">
                    <option value="type">All Types</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Maisonette">Land</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>

                <div className="form-item">
                  <label>Search Area:</label>
                  <select id="searchArea" name="searchArea">
                    <option value="area">Any Area</option>
                    <option value="BR1">BR1</option>
                    <option value="BR2">BR2</option>
                    <option value="BR3">BR3</option>
                    <option value="BR4">BR4</option>
                    <option value="BR5">BR5</option>
                    <option value="BR6">BR6</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>No of Bedrooms:</label>
                  <select id="NoOfBedroomMin" name="NoOfBedroomMin">
                    <option value="">No Min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select id="NoOfBedroomMax" name="NoOfBedroomMax">
                    <option value="">No Max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div className="form-item">
                  <label>Price Range:</label>
                  <select id="priceMin" name="priceMin">
                    <option value="">Min Price</option>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option value={(i + 1) * 50000} key={`min-${i + 1}`}>
                        ${(i + 1) * 50000}
                      </option>
                    ))}
                  </select>
                  <select id="priceMax" name="priceMax">
                    <option value="">Max Price</option>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option value={(i + 1) * 50000} key={`max-${i + 1}`}>
                        ${(i + 1) * 50000}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>Date Added:</label>
                  <input type="date" id="startDate" name="startDate" />
                  <input type="date" id="endDate" name="endDate" />
                </div>
              </div>

              <div className="form-row">
                <button type="submit" className="search-button">
                  Search
                </button>
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="clear-button"
                >
                  Clear All
                </button>
              </div>
            </form>
          </div>

          <div className="results-container">
            <h2 className="section-title">Our Properties</h2>
            {filteredProperties.length > 0 ? (
              <div className="property-gallery">
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className="property-card"
                    draggable
                    onDragStart={(event) => handleDragStart(event, property)}
                  >
                    <img
                      src={property.picture}
                      alt={property.type}
                      className="property-image"
                    />
                    <div className="property-details">
                      <h3>{property.type}</h3>
                      <p>{property.location}</p>
                      <p>{property.shortdescription}</p>
                      <p>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(property.price)}
                      </p>
                      <button
                        onClick={() => addToFavorites(property)}
                        className="add-favorite-button"
                      >
                        Add to Favorites
                      </button>
                      <button
                        onClick={() => handleExploreMore(property.id)}
                        className="explore-button"
                      >
                        Explore More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-results">No properties match your search.</p>
            )}
          </div>
        </section>

        {/* Favorites Section */}
        <aside
          className="favourites-list"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <h2>Favorites</h2>
          {favorites.length > 0 ? (
            <>
              {favorites.map((fav) => (
                <div key={fav.id} className="favourite-item">
                  <img src={fav.picture} alt={fav.type} />
                  <div>
                    <h3 className="favorite-type">{fav.type}</h3>
                    <button
                      onClick={() => removeFromFavorites(fav.id)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={clearFavorites}
                className="clear-button favorites-clear"
              >
                Clear All Favorites
              </button>
            </>
          ) : (
            <p>Drag properties here or click "Add to Favorites".</p>
          )}
        </aside>
      </main>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 EstateEase. All Rights Reserved.</p>
          <p>Follow us on:</p>
          <div className="social-icons">
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
