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


const Header = () => {
  const [openProfile, setOpenProfile] = useState(false)

  const ref = useRef()

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    mobile: '',
    role: ''
  })

  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    const res = await axios.post('http://localhost:3002/signup/', {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        confirmPassword: inputs.confirmPassword,
        mobile: inputs.mobile,
        role: inputs.role
    }).catch(err => console.log(err));
    const data = await res.data;
    console.log(data)
    return data;
}


const loginUser = async () => {
    const res =  await axios.post('http://localhost:3002/login', {
        email: inputs.email,
        password: inputs.password
    }).catch(err => console.log(err));
    const data = await res.data;
    console.log(data)
    return data;
}

  
const handleLogin = (e) => {
  e.preventDefault();
  try {
    loginUser();
    handleCloseLogin();
    navigate('/');
    setIsLoggedIn(true);

  } catch (err) {
    console.log(err)
  }
}

const handleSignup = (e) => {
  e.preventDefault();
  try {
    createUser();
    handleCloseRegister();
    navigate('/');
  } catch (err) {
    console.log(err)
  }
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
            { isLoggedIn 
              ?
                <div className='user' ref={ref}>
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
              
              : 
                <div className='login'>
                  <LoginButton handleShowLogin={handleShowLogin} />
                </div>
            }
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
                    <label className='input-labels'>First Name</label>
                    <Input inputType="text" name='firstName' className='input' onChange={handleChange} placeholderText={'Enter First Name'} required />
                    <label className='input-labels'>Last Name</label>
                    <Input inputType="text" name='lastName' className='input' onChange={handleChange} placeholderText={'Enter Last Name'} required />
                    <label className='input-labels'>Email</label>
                    <Input inputType="email" name='email' className='input' onChange={handleChange} placeholderText={'Enter Email'} required />
                    <label className='input-labels'>Password</label>
                    <Input inputType="password" name='password' className='input' onChange={handleChange} placeholderText={'Enter Password'} required />
                    <label className='input-labels'>Confirm Password</label>
                    <Input inputType="password" name='confirmPassword' className='input' onChange={handleChange} placeholderText={'Enter Password Again'} required />
                    <label className='input-labels'>Phone Number</label>
                    <Input inputType="text" name='mobile' className='input' onChange={handleChange} placeholderText={'Enter Phone Number'} required />
                    <label className='input-labels'>Are you a Buyer or Seller?</label>
                    <Input inputType="text" name='role' className='input' onChange={handleChange} placeholderText='Enter Password Again' required />
                    
                    <div>
                      <input type="checkbox" className='checkbox'  />
                      <label>I am a realtor or industry professional </label>
                    </div>
                    <div className='button' onClick={handleSignup}><SignupButton /></div>
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
                      <Input inputType="email" name="email" className='input' onChange={handleChange} placeholderText={'Enter Email'} required />
                      <label className='input-labels'>Password</label>
                      <Input inputType="password" name="password" className='input' onChange={handleChange} placeholderText='Enter Password' required />
                      <div className='button' onClick={handleLogin}><LoginButton /></div>
                      
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
