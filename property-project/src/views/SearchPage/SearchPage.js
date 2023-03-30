import React, {useState} from "react";
import "./SearchPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchBar from "../../components/SearchBar/SearchBar";
import Listings from "../../components/Listings/Listings";
import SearchResults from "../../components/uikit/SearchResults/SearchResults";

const SearchPage = () => {


  return (
    <>
      <Container className="search-page-container">
        
        <Row className="search-bar-filter">
          <SearchBar />
        </Row>
        <Row className="result-summary">
          <Listings />
        </Row>
        <Row className="search-results">
          <SearchResults />
        </Row>
      </Container>

      
    </>
  );
};

export default SearchPage;
