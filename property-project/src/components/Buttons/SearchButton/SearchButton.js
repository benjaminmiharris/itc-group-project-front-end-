import React from 'react'
import "./SearchButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchButton = () => {
  return (
    <button className='search-button' type='submit'>Search <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' /></button>
  )
}

export default SearchButton
