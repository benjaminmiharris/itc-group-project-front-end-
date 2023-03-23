import React from "react";
import "./input-text-field.css";

const InputText = ({ inputType, placeholderText }) => {
  return (
    <>
      <input
        className="input-field"
        type={inputType}
        placeholder={placeholderText}
      />
    </>
  );
};

export default InputText;
