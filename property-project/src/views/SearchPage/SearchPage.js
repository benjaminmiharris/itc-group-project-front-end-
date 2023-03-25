import React from "react";
import "./SearchPage.css";
import DropDown from "../../components/MultiSelect/DropDown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputText from "../../components/InputUI/InputText";
import PrimaryBtn from "../../components/Buttons/ActionButton/PrimaryBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/uikit/Header/Header"
import SortByDropdown from "../../components/uikit/Dropdowns/SortByDropdown/SortByDropdown";
import Column from "../../components/uikit/Column/Column";
import CardRental from "../../components/CardRental/CardRental";
import Card from "../../components/uikit/Card/Card";

const SearchPage = () => {
  const items = ["item 1", "item 2", "item 3"];

  return (
    <>
      <Container className="search-page-container">
        <Header/>
        <Row className="search-bar-filter">
          <SearchBar />
        </Row>
        <Row className="result-summary">
          <Column>
            <p className="total-listings"><strong>1,380 Rental Listings</strong></p>
            <p className="total-listings-paginatation"><strong>Showing 8 - 50 results</strong></p>
          </Column>
          <Column>
            <SortByDropdown
              items={items}
              defaultLabelText={"sort by"}
              labelBackgroundColor={"#007E8B"}
            />
          </Column>
        </Row>
        <Row className="search-results">
          <Card/>
        </Row>
      </Container>
    </>
  );
};

export default SearchPage;
