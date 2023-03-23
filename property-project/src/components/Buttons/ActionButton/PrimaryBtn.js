import React from "react";
import Button from "react-bootstrap/Button";

const PrimaryBtn = ({ labelBackgroundColor }) => {
  const dropdownStyle = { backgroundColor: labelBackgroundColor };

  return <Button style={dropdownStyle}>Primary</Button>;
};

export default PrimaryBtn;
