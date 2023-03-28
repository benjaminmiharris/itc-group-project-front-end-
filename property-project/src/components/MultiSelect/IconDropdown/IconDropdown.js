import React, { useState } from 'react'
import './IconDropdown.css'



const IconDropdown = () => {

  return (
    <div className='dropdown-container'>
        <ul className='dropdown'>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>Settings</a></li>
            <li><a href='#'>Logout</a></li>
        </ul>

    </div>
  )
}

export default IconDropdown
