import React, {useState, useRef, useEffect} from 'react'
import './Header.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img2 from '../../images/img2.png'
import IconDropdown from '../../MultiSelect/IconDropdown/IconDropdown'
import LoginButton from '../../Buttons/LoginButton/LoginButton'


const Header = () => {
  const [openProfile, setOpenProfile] = useState(false)

  const ref = useRef()
 
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openProfile && ref.current && !ref.current.contains(e.target)) {
        setOpenProfile(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [openProfile])


  return (
    <div>
      <div className='header'>
          <img src={img2} alt='house-icon' className='house-icon' />
          <div className='login-user'>
            <div className='login'>
              <LoginButton  /> {/* this needs to be set if not logged in */}

            </div>
            <div className='user' ref={ref}> {/* this needs to be set if not logged in */}
              <FontAwesomeIcon 
                icon={faUser} 
                className='user-icon' 
                onClick={() => setOpenProfile ((prev) => !prev)} 
              />
              {
                openProfile && (
                  <div className='dropdown-container'>
                    <IconDropdown />
                  </div>
                )
              } 
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
