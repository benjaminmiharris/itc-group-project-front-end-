import React from "react";
import DropDown from "../../components/MultiSelect/DropDown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./search-page.css";
import InputText from "../../components/InputUI/InputText";
import PrimaryBtn from "../../components/Buttons/ActionButton/PrimaryBtn";

const SearchPage = () => {
  const items = ["item 1", "item 2", "item 3"];

  return (
    <Container className="search-page-container">
      <Row className="search-bar-filter">
        <Col>
          <InputText
            inputType={"text"}
            placeholderText={"City, Neighborhood, Address"}
          />
        </Col>
        <Col>
          <DropDown
            items={items}
            defaultLabelText={"Home Type"}
            labelBackgroundColor={"#007E8B"}
          />
        </Col>
        <Col>
          <DropDown
            items={items}
            defaultLabelText={"Price"}
            labelBackgroundColor={"#007E8B"}
          />
        </Col>
        <Col>
          <DropDown
            items={items}
            defaultLabelText={"More"}
            labelBackgroundColor={"#007E8B"}
          />
        </Col>
        <Col>
          <PrimaryBtn labelBackgroundColor={"#007E8B"} />
        </Col>
      </Row>
      <Row className="search-results result-summary">
        <Col md={4}>
          <p className="total-listings">1,380 Rental Listings</p>
          <p className="total-listings-paginatation">Showing 8 - 50 results</p>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <DropDown
            items={items}
            defaultLabelText={"sort by"}
            labelBackgroundColor={"#007E8B"}
          />
        </Col>
      </Row>
      <Row className="search-results">Search Results tile</Row>
    </Container>
  );
};

export default SearchPage;
