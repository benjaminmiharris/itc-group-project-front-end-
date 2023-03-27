import React from "react";
import "./Listings.css";
import Column from "../uikit/Column/Column";
import SortByDropdown from "../uikit/Dropdowns/SortByDropdown/SortByDropdown";
import { Container } from "react-bootstrap";

const Listings = () => {
  return (
    <Container className="listings">
      <div className="total-listings-container">
        <p className="total-listings">1,380 Rental Listings</p>
        <p className="total-listings-pagination">Showing 8 - 50 results</p>
      </div>
      <Column>
        <SortByDropdown
          defaultLabelText={"sort by"}
          labelBackgroundColor={"#007E8B"}
        />
      </Column>
    </Container>
  );
};

export default Listings;
