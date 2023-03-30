import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './IconDropdown.css'



const IconDropdown = () => {

  const [logout, setLogout] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }

  const handleProfile = () => {
    navigate('/profile')
  }

  const handleSearchPage = () => {
    navigate('/')
    
  }


  return (
    <div className='dropdown-container'>
        <ul className='dropdown'>
            <li><button className='dropdown-button' name='profile' onClick={handleProfile}>Profile</button></li>
            <li><button className='dropdown-button' onClick={handleSearchPage}>Find Homes</button></li>
            <li><button className='dropdown-button' name='logout' onClick={handleLogout}>Logout</button></li>
        </ul>

    </div>
  )
}

export default IconDropdown
