import React from 'react'
import "./SortByDropdown.css"

const SortByDropdown = () => {
  return (
    <select className='sortby-dropdown'>
        <option>Sort by:</option>
        <option value='priceAsc'>Price (lo-hi)</option>
        <option value='priceDesc'>Price (hi-lo)</option>
        <option value='homeType'>Home Type</option>
        <option value='bedrooms'># of Bedrooms</option>
        <option value='sqm'>Sq. Meters</option>
    </select>
  )
}

export default SortByDropdown
