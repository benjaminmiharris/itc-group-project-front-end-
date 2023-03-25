import React from 'react'
import "./PriceDropdown.css"

const PriceDropdown = () => {
  return (
    <select className='price-dropdown'>
        <option>Price</option>
        <option value='00-500'>$0 - $500 </option>
        <option value='501-1000'>$501 - $1000</option>
        <option value='1001-1500'>$1001 - $1500</option>
        <option value='1501-2000'>$1501 - $2000</option>
        <option value='2001-2500'>$2001 - $2500</option>
        <option value='2501-3000'>$2501 - $3500</option>
        <option value='plus'>+ $3500</option>
    </select>
  )
}

export default PriceDropdown
