import React, { Component } from 'react';
import SearchBar2 from '../components/SearchBar2';
import CardRental from '../components/CardRental'; // import the CardRental component
import './SearchPage.css'; // For SAM

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: '',
      rentalType: 'home',
      price: ''
    };
  }

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleRentalTypeChange = event => {
    this.setState({ rentalType: event.target.value });
  };

  handlePriceChange = event => {
    this.setState({ price: event.target.value });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    //  WAITING FOR THE BE API
    // DATA SIMULATION JUST WAITING FOR THE BACKEND API
    const searchResults = [
      {
        id: 1,
        address: '111 Ben Gourion St',
        rentalType: 'home',
        price: 1000
      },
      {
        id: 2,
        address: '45 Herzl St',
        rentalType: 'apartment',
        price: 1100
      },
      {
        id: 3,
        address: '7 Yafo St',
        rentalType: 'home',
        price: 2200
      }
    ];
    this.setState({ searchResults });
  };

  /* render() {
    return (
      <div>
        <SearchBar2
          searchTerm={this.state.searchTerm}
          rentalType={this.state.rentalType}
          price={this.state.price}
          handleSearchTermChange={this.handleSearchTermChange}
          handleRentalTypeChange={this.handleRentalTypeChange}
          handlePriceChange={this.handlePriceChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        <h2>Search Results</h2>
        <ul>
          {this.state.searchResults.map(result => (
            <li key={result.id}>
              <div>Address: {result.address}</div>
              <div>Rental Type: {result.rentalType}</div>
              <div>Price: {result.price}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  } */

  render() {
    const searchResultCards = [];
    const { searchResults } = this.state;
    for (let i = 0; i < searchResults.length; i += 4) {
      const row = searchResults.slice(i, i + 4);
      const cards = row.map(result => (
        <div key={result.id} className="col-sm-3">
          <CardRental
            address={result.address}
            rentalType={result.rentalType}
            price={result.price}
          />
        </div>
      ));
      searchResultCards.push(
        <div key={i} className="row">
          {cards}
        </div>
      );
    }

    return (
      <div>
        <SearchBar2
          searchTerm={this.state.searchTerm}
          rentalType={this.state.rentalType}
          price={this.state.price}
          handleSearchTermChange={this.handleSearchTermChange}
          handleRentalTypeChange={this.handleRentalTypeChange}
          handlePriceChange={this.handlePriceChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        <h2>Search Results</h2>
        {searchResultCards}
      </div>
    );
  }
}

export default SearchPage;
