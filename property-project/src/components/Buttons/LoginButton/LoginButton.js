import React, {useState} from 'react'
import "./LoginButton.css"

const LoginButton = ({ handleLoginClick }) => {
   

  return (
    <>
        <button 
            className='login-button' 
            type='submit'  
            onClick={handleLoginClick}
        >
            Login
        </button>  
    </>
  )
}

export default LoginButton