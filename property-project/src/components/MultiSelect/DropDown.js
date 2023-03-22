import Dropdown from "react-bootstrap/Dropdown";

function DropDown({ items, defaultLabel }) {
  const dropdownStyle = { backgroundColor: "#007E8B" };

  return (
    <>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className="drop-down-option"
          style={dropdownStyle}
        >
          {defaultLabel}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items.map((item) => (
            <Dropdown.Item href="#">{item}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropDown;
