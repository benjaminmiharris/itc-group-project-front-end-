import React, {useState, useRef, useEffect} from 'react'
import './Header.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img2 from '../../images/img2.png'
import IconDropdown from '../../MultiSelect/IconDropdown/IconDropdown'
import LoginButton from '../../Buttons/LoginButton/LoginButton'
import SignupButton from '../../Buttons/SignupButton/SignupButton'
import Input from '../Input/Input'
import { Modal, ModalBody, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ToggleButton from '../../Buttons/ToggleButton/ToggleButton'


const Header = ( { inputType, placeholderText }) => {
  const [openProfile, setOpenProfile] = useState(false)

  const ref = useRef()

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: ''
  })


  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const phoneNumberRef = useRef()


  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }

  const [error, setError] = useState('')
  const navigate = useNavigate()  

  const [showRegister, setShowRegister] = useState(false)
      
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
      
  const [showLogin, setShowLogin] = useState(false)
      
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
      
    
  const SwitchFromRegisterToLogin = () => {
    handleShowLogin();
    handleCloseRegister();
  }
     
  const SwitchFromLoginToRegister = () => {
    handleCloseLogin();
    handleShowRegister();
  }

  const createUser = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/signup/', {
        name: {
            firstName: inputs.firstName,
            lastName: inputs.lastName
        },
        email: inputs.email,
        password: inputs.password,
        phoneNumber: inputs.phoneNumber
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
}


const loginUser = async () => {
    const res =  await axios.post('http://localhost:5000/api/auth/login', {
        email: inputs.email,
        password: inputs.password
    }).catch(err => console.log(err));
    const data = await res.data;
    console.log(data)
    return data;
}

  



 
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
              <LoginButton handleShowLogin={handleShowLogin}  /> {/* this needs to be set if not logged in */}

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
          <Modal 
            className='modal' 
            show={showRegister}
            onHide={handleCloseRegister}
        >
          <ModalBody className='modal-content'>
                <button className='btn-close btn-close-black' onClick={handleCloseRegister} />
                <h2 className='text-center mb-4'>Signup</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form className='modal-form'>
                    <label className='input-labels'>Email</label>
                    <Input type="email" className='input' placeholderText={'Enter Email'} required />
                    <label className='input-labels'>Password</label>
                    <Input type="password" className='input' placeholderText='Enter Password' required />
                    <label className='input-labels'>Confirm Password</label>
                    <Input type="password" className='input' placeholderText='Enter Password Again' required />
                    <div>
                      <input type="checkbox" className='checkbox' required />
                      <label>I am a realtor or industry professional </label>
                    </div>
                    <div className='button'><SignupButton /></div>
                  </Form>
                  <div className='modal-footer'>
                    <strong>Already a member? </strong>
                    <button className='login-footer' onClick={SwitchFromRegisterToLogin}>Login!</button>

                  </div>
               
            </ModalBody>
        </Modal>

        <Modal
            className='modal' 
            show={showLogin}
            onHide={handleCloseLogin}
        >
            <ModalBody className='modal-content'>
                <button className='btn-close btn-close-black' onClick={handleCloseLogin} />
                <h2 className='text-center mb-4'>Login</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                  <Form className='modal-form'>
                      <label className='input-labels'>Email</label>
                      <Input type="email" className='input' placeholderText={'Enter Email'} required />
                      <label className='input-labels'>Password</label>
                      <Input type="password" className='input' placeholderText='Enter Password' required />
                      <div className='button'><LoginButton /></div>
                      
                  </Form>
                  <a href="#" className='forgot-password'>Forgot Your Password?</a>
                  {/* <ToggleButton/> */}
                  <div className='modal-footer'>
                    <strong>Don't have an account? </strong>
                    <button className='signup-footer' onClick={SwitchFromLoginToRegister}>Sign up!</button>
                  </div>
            </ModalBody>
        </Modal>
      </div>
    </div>
  )
}

export default Header
