import React, {useState} from 'react'
import "./LoginButton.css"

const LoginButton = ({ handleShowLogin }) => {
   

  return (
    <>
        <button 
            className='login-button' 
            type='submit'  
            onClick={handleShowLogin}
        >
            Login
        </button>  
    </>
  )
}

export default LoginButton