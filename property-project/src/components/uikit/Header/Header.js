import React, {useState} from 'react'
import './Header.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img2 from '../../images/img2.png'
import IconDropdown from '../../MultiSelect/IconDropdown/IconDropdown'
import LoginButton from '../../Buttons/LoginButton/LoginButton'


const Header = () => {
  const [openProfile, setOpenProfile] = useState(false)

  return (
    <div>
      <div className='header'>
          <img src={img2} alt='house-icon' className='house-icon' />
          <div className='login-user'>
          {/* <LoginButton  /> */}

            <FontAwesomeIcon 
              icon={faUser} 
              className='user-icon' 
              onClick={() => setOpenProfile ((prev) => !prev)} 
            /> 
          </div>
      </div>
      {
          openProfile && (
            <IconDropdown />
          )
        }
    </div>
  )
}

export default Header
