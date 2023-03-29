import React from 'react'
import './SignupButton.css'

const SignupButton = ({handleShowRegister}) => {
  return (
    <>
        <button 
            className='signup-button' 
            type='submit'  
            onClick={handleShowRegister}
        >
            Submit
        </button>  
    </>
  )
}

export default SignupButton
