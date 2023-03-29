import React from 'react'
import "./Input.css"

const Input = ({ inputType, placeholderText, onChange, name}) => {
  return (
    <input className='input' type={inputType} placeholder={placeholderText} onChange={onChange} name={name}
    
    />
  )
}

export default Input
