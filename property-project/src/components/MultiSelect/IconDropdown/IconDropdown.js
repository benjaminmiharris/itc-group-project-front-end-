import React from 'react'
import './IconDropdown.css'



const IconDropdown = () => {

  return (
    <div className='dropdown-container'>
        <ul className='dropdown'>
            <li><button className='dropdown-button'>Profile</button></li>
            <li><button className='dropdown-button'>Settings</button></li>
            <li><button className='dropdown-button'>Logout</button></li>
        </ul>

    </div>
  )
}

export default IconDropdown
