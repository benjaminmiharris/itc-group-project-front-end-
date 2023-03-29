import React from 'react'
import "./Input.css"

const Input = ({ inputType, placeholderText}) => {
  return (
    <input className='input' type={inputType} placeholder={placeholderText}
    
    />
  )
}

export default Input
