import React from 'react'
import './Search.css';


export default function Search() {
  return (
    <div>
        <div className='Search-form'>
            <form>
                <div className="form">
                    <label>Property Type:</label>
                    <select id="propertyType" name="propertyType">
                        <option value="type">Property Type</option>
                        <option value="house">House</option>
                        <option value="flat">Flat</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="maisonette">Land</option>
                        <option value="apartment">Apartment</option>
                    </select>

                    <label>Search Area:</label>
                    <select id="searchArea" name="searchArea">
                        <option value="area">Search area</option>
                        <option value="BR1">BR1</option>
                        <option value="BR2">BR2</option>
                        <option value="BR3">BR3</option>
                        <option value="BR4">BR4</option>
                        <option value="BR5">BR5</option>
                        <option value="BR6">BR6</option>
                    </select>

                    <label>No of Bedrooms:</label>
                    <select id="minBedroom" name="NoOfBedroom">
                        <option value="min">No Min</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <select id="maxBedroom" name="NoOfBedroom">
                        <option value="max">No Max</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label>Price range:</label>
                    <select id="minPrice" name="price">
                        <option value="min">Min Price</option>
                        <option value="max">Max Price</option>
                        <option value="1">100,000</option>
                        <option value="2">200,000</option>
                        <option value="3">300,000</option>
                        <option value="4">400,000</option>
                        <option value="5">500,000</option>
                        <option value="6">600,000</option>
                        <option value="7">700,000</option>
                        <option value="8">800,000</option>
                        <option value="9">900,000</option>
                        <option value="10">1,000,000</option>
                        <option value="11">1,100,000</option>
                        <option value="12">1,200,000</option>
                        <option value="13">1,300,000</option>
                        <option value="14">1,400,000</option>
                        <option value="15">1,500,000</option>
                    </select>
                    <select id="maxPrice" name="price">
                        <option value="max">Max Price</option>
                        <option value="1">100,000</option>
                        <option value="2">200,000</option>
                        <option value="3">300,000</option>
                        <option value="4">400,000</option>
                        <option value="5">500,000</option>
                        <option value="6">600,000</option>
                        <option value="7">700,000</option>
                        <option value="8">800,000</option>
                        <option value="9">900,000</option>
                        <option value="10">1,000,000</option>
                        <option value="11">1,100,000</option>
                        <option value="12">1,200,000</option>
                        <option value="13">1,300,000</option>
                        <option value="14">1,400,000</option>
                        <option value="15">1,500,000</option>
                    </select>

                    <label>Added to site:</label>
                    

                </div>
            </form>
        </div>

        <div className='Search-listing'>
            <h1>Properties</h1>
        </div>
    </div>
  )
}
