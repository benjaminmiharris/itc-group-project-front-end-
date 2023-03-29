import React, { useState } from 'react'
import './ToggleButton.css'

const ToggleButton = () => {

    const [toggle, setToggle] = useState(false);

    const SignupPage=()=>{
        if (toggle) {
        setToggle (false);
        }
        else {
        setToggle (true);
        }
        }
        
        const LoginPage = () => {
        if (toggle) {
        setToggle(false);
        }
        else {
        setToggle(true);
        }
        }

  return (
      <div className='actBtns'>
        <button className='actBtn signup' onClick={SignupPage}>Signup</button>
        <button className='actBtn login' onClick={LoginPage}>Login</button>
        {/* <button className='moveBtn rightBtn'>Signup</button> */}
      </div>
  )
}

export default ToggleButton
