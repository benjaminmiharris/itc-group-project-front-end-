import React from 'react'
import './Header.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img2 from '../../images/img2.png'


const Header = () => {
  return (
    <div>
      <div className='header'>
            <img src={img2} alt='house-icon' className='house-icon' />
            <FontAwesomeIcon icon={faUser} className='user-icon' />
          </div>
    </div>
  )
}

export default Header
